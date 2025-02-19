import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
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
    defaultDateType: "created",
    generateSocialImages: false,
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
          light: "#eeeeee", // page backgournd
          lightgray: "#bcbcbc", // borders
          gray: "#b8b8b8", // graph links, heavier borders
          darkgray: "#4e4e4e", // body text
          dark: "#2b2b2b", // header text and icons
          secondary: "#009E60", // link colour, current graph node
          tertiary: "#84a59d", // hover states and visited graph nodes
          highlight: "rgba(143, 159, 169, 0.15)", // internal link background, highlighted text, high-lighted lines of code
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618", // page backgournd
          lightgray: "#393639", // borders
          gray: "#646464", // graph links, heavier borders
          darkgray: "#d4d4d4", // body text
          dark: "#ebebec", // header text and icons
          secondary: "#009382", // link colour, current graph node
          tertiary: "#84a59d", // hover states and visited graph nodes
          highlight: "rgba(143, 159, 169, 0.15)", // internal link background, highlighted text, high-lighted lines of code
          textHighlight: "#b3aa0288",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
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
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
