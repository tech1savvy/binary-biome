import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const BUILTIN_FIELDS = new Set([
  "title",
  "tags",
  "aliases",
  "description",
  "socialDescription",
  "socialImage",
  "permalink",
  "comments",
  "lang",
  "publish",
  "draft",
  "enableToc",
  "cssclasses",
  "created",
  "modified",
  "published",
  "image",
  "cover",
  "tag",
  "alias",
  "date",
  "lastmod",
  "updated",
  "last-modified",
  "publishDate",
  // extra fields added for exclusion
  "noteId",
])

function formatValue(val: unknown): string {
  if (val === null || val === undefined) return ""
  if (Array.isArray(val)) {
    return val
      .map((v) => (typeof v === "string" ? v : JSON.stringify(v)))
      .filter(Boolean)
      .join(", ")
  }
  if (typeof val === "string") return val
  return JSON.stringify(val)
}

function parseLinks(text: string): (string | { text: string; href: string })[] {
  const parts: (string | { text: string; href: string })[] = []
  let lastIndex = 0
  const combined = /\[([^\]]*)\]\(([^)]*)\)|\[\[([^\]]*)\]\]/g
  let match: RegExpExecArray | null
  while ((match = combined.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    if (match[1] !== undefined) {
      parts.push({ text: match[1], href: match[2] })
    } else if (match[3] !== undefined) {
      const [target, alias] = match[3].split("|").map((s) => s.trim())
      parts.push({ text: alias || target, href: target })
    }
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }
  return parts
}

const FrontmatterMeta: QuartzComponent = ({ fileData, displayClass, allFiles }: QuartzComponentProps) => {
  const fm = fileData.frontmatter
  if (!fm) return null

  const entries = Object.entries(fm).filter(
    ([key, val]) => !BUILTIN_FIELDS.has(key) && val !== undefined && val !== null,
  )

  if (entries.length === 0) return null

  const slugMap = new Map<string, string>()
  for (const f of allFiles) {
    if (f.slug) {
      const stem = f.slug.substring(f.slug.lastIndexOf("/") + 1)
      slugMap.set(stem, f.slug)
    }
  }

  const slug = fileData.slug ?? ""

  return (
    <aside class={classNames(displayClass, "frontmatter-metadata")}>
      <dl>
        {entries.map(([key, val]) => (
          <div key={key} class="frontmatter-row">
            <dt class="frontmatter-key">{key}</dt>
            <dd class="frontmatter-value">
              {renderValue(val, slug, slugMap)}
            </dd>
          </div>
        ))}
      </dl>
    </aside>
  )
}

function renderValue(val: unknown, slug: string, slugMap: Map<string, string>) {
  if (Array.isArray(val)) {
    return (
      <ul class="frontmatter-list">
        {val.map((item, i) => (
          <li key={i}>{renderScalar(item, slug, slugMap)}</li>
        ))}
      </ul>
    )
  }
  return renderScalar(val, slug, slugMap)
}

function renderScalar(val: unknown, slug: string, slugMap: Map<string, string>) {
  const str = formatValue(val)
  const parts = parseLinks(str)
  return (
    <>
      {parts.map((part, i) =>
        typeof part === "string" ? (
          <span key={i}>{part}</span>
        ) : (
          <a key={i} href={resolveHref(part.href, slug, slugMap)}>
            {part.text}
          </a>
        ),
      )}
    </>
  )
}

function resolveHref(href: string, slug: string, slugMap: Map<string, string>): string {
  if (href.startsWith("http://") || href.startsWith("https://") || href.startsWith("#")) {
    return href
  }
  if (href.startsWith("/")) return href

  const clean = href.replace(/\.md$/i, "")

  const resolved = slugMap.get(clean)
  if (resolved) return "/" + resolved

  const base = slug.substring(0, slug.lastIndexOf("/"))
  return "/" + base + "/" + clean
}

FrontmatterMeta.css = `
.frontmatter-metadata {
  margin: 1rem 0;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--lightgray);
  border-radius: 6px;
  font-size: 0.85em;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 1rem;
}
.frontmatter-row {
  display: inline-flex;
  gap: 0.25rem;
  align-items: center;
}
.frontmatter-key {
  font-weight: 500;
  color: var(--gray);
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.frontmatter-value {
  margin: 0;
  color: var(--darkgray);
}
.frontmatter-value a {
  color: var(--secondary);
  text-decoration: none;
  font-weight: 500;
}
.frontmatter-value a:hover {
  text-decoration: underline;
}
.frontmatter-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline;
}
.frontmatter-list li {
  display: inline;
}
.frontmatter-list li+li::before {
  content: " ";
}
`

export default (() => FrontmatterMeta) satisfies QuartzComponentConstructor
