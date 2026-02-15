import type { SiteCategory } from "../types";

/**
 * Site categories and routes configuration.
 * Each category contains a list of sites.
 * - `icon` and `description` are optional; leave empty string or omit them.
 * - Add new categories or sites by following the same structure.
 */
export const siteCategories: SiteCategory[] = [
  {
    name: "Common Tools",
    sites: [
      {
        name: "GitHub",
        url: "https://github.com",
        description: "Code hosting platform",
        icon: "https://github.com/favicon.ico",
      },
      {
        name: "Stack Overflow",
        url: "https://stackoverflow.com",
        description: "Q&A for developers",
        icon: "https://stackoverflow.com/favicon.ico",
      },
      {
        name: "ChatGPT",
        url: "https://chat.openai.com",
        description: "AI assistant",
        icon: "",
      },
      {
        name: "Notion",
        url: "https://notion.so",
        description: "Workspace & notes",
        icon: "https://www.notion.so/images/favicon.ico",
      },
      {
        name: "Google Translate",
        url: "https://translate.google.com",
        description: "Translation tool",
        icon: "",
      },
    ],
  },
  {
    name: "Development",
    sites: [
      {
        name: "MDN",
        url: "https://developer.mozilla.org",
        description: "Web docs",
        icon: "",
      },
      {
        name: "npm",
        url: "https://www.npmjs.com",
        description: "Package registry",
        icon: "https://static-production.npmjs.com/b0f1a8318363185cc2ea6a40ac23eeb2.png",
      },
      {
        name: "Can I Use",
        url: "https://caniuse.com",
        description: "Browser compatibility",
        icon: "",
      },
      {
        name: "CodePen",
        url: "https://codepen.io",
        description: "Frontend playground",
        icon: "https://codepen.io/favicon.ico",
      },
      {
        name: "TypeScript",
        url: "https://www.typescriptlang.org",
        description: "TS documentation",
        icon: "",
      },
    ],
  },
  {
    name: "Media",
    sites: [
      {
        name: "YouTube",
        url: "https://youtube.com",
        description: "Video platform",
        icon: "https://www.youtube.com/favicon.ico",
      },
      {
        name: "Bilibili",
        url: "https://bilibili.com",
        description: "Video community",
        icon: "https://www.bilibili.com/favicon.ico",
      },
    ],
  },
  {
    name: "News & Info",
    sites: [
      {
        name: "Hacker News",
        url: "https://news.ycombinator.com",
        description: "Tech news",
        icon: "https://news.ycombinator.com/favicon.ico",
      },
      {
        name: "Reddit",
        url: "https://reddit.com",
        description: "Community forums",
        icon: "https://www.reddit.com/favicon.ico",
      },
      {
        name: "Wikipedia",
        url: "https://wikipedia.org",
        description: "Encyclopedia",
        icon: "",
      },
    ],
  },
  {
    name: "Blog",
    sites: [
      {
        name: "evilcos - 余弦",
        url: "https://evilcos.me/",
        description: "evilcos's blog",
        icon: "",
      },
      {
        name: "zu1k",
        url: "https://lgf.im/",
        description: "zu1k's blog",
        icon: "",
      },
      {
        name: "A2kaid",
        url: "https://www.dongzt.cn/",
        description: "Alkaid #二进制初学者 / 网络安全 / 大龄CTF退役选手",
        icon: "",
      },
      {
        name: "咲夜南梦's 博客",
        url: "https://196011564.github.io/",
        description: "咲夜南梦's 博客",
        icon: "",
      },
      {
        name: "zhaoj",
        url: "https://www.zhaoj.in/",
        description: "西兴街道物理安全研究员 / Web手@W&M / 信息安全爱好者 / 全栈开发",
        icon: "",
      },
    ],
  },
  {
    name: "Academic",
    sites: [
      {
        name: "WikiCFP",
        url: "http://www.wikicfp.com/cfp/program?id=2660",
        description: "A Wiki Calls For Paper",
        icon: "",
      },
      {
        name: "Sec Deadline",
        url: "https://sec-deadlines.github.io/",
        description: "Countdowns to top Security and Privacy conference deadlines",
        icon: "",
      },
      {
        name: "Conference Partner",
        url: "https://www.myhuiban.com/",
        description: "信息技术最新国际会议和期刊列表 - Conference Partner (会伴)",
        icon: "",
      },
      {
        name: "CSRankings",
        url: "http://csrankings.org/",
        description: "Metrics-based ranking of top CS institutions around the world",
        icon: "",
      },
      {
        name: "LoCCS 论文投稿引导列表",
        url: "https://www.zybuluo.com/romangol/note/252848",
        description: "一堆学术会议",
        icon: "",
      },
    ],
  },
  {
    name: "Academic Security",
    sites: [
      {
        name: "USENIX Security",
        url: "https://www.usenix.org/conferences",
        description: "USENIX Security Symposium",
        icon: "",
      },
      {
        name: "CCS",
        url: "http://www.sigsac.org/ccs.html",
        description: "ACM Conference on Computer and Communications Security",
        icon: "",
      },
      {
        name: "NDSS",
        url: "https://www.ndss-symposium.org/",
        description: "Network and Distributed System Security Symposium",
        icon: "",
      },
      {
        name: "Oakland S&P",
        url: "http://www.ieee-security.org/TC/SP-Index.html",
        description: "IEEE Symposium on Security & Privacy",
        icon: "",
      },
    ],
  },
];
