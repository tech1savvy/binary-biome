import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🪸Binary Biome",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk", // font for headers
        body: "Source Sans Pro", // for everything else
        code: "IBM Plex Mono", // for inline and block quotes
      },
      colors: {
        lightMode: {
          light: "#ffffff", // page background (white)
          lightgray: "#d3d3d3", // borders (light gray)
          gray: "#708090", // graph links, heavier borders (slate gray)
          darkgray: "#708090", // body text (slate gray)
          dark: "#36454f", // header text and icons (charcoal)
          secondary: "#36454f", // link colour, current graph node (charcoal)
          tertiary: "#708090", // hover states and visited graph nodes (slate gray)
          highlight: "rgba(54, 69, 79, 0.1)", // internal link background, highlighted text
          textHighlight: "#36454f33", // markdown highlighted text background
        },
        darkMode: {
          light: "#36454f", // page background (charcoal)
          lightgray: "#2c3942", // borders (darker charcoal)
          gray: "#708090", // graph links, heavier borders (slate gray)
          darkgray: "#d3d3d3", // body text (light gray)
          dark: "#ffffff", // header text and icons (white)
          secondary: "#d3d3d3", // link colour, current graph node (light gray)
          tertiary: "#708090", // hover states and visited graph nodes (slate gray)
          highlight: "rgba(211, 211, 211, 0.15)", // internal link background, highlighted text
          textHighlight: "#d3d3d333", // markdown highlighted text background
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
