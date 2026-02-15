import type { SearchEngine } from "../types";

/**
 * Search engines configuration.
 * Add, remove, or reorder search engines here.
 * The first entry is used as the default.
 */
export const searchEngines: SearchEngine[] = [
  {
    name: "Google",
    url: "https://www.google.com/search?q=",
    icon: "https://www.google.com/favicon.ico",
  },
  {
    name: "Yandex",
    url: "https://yandex.com/search/?text=",
    icon: "https://yandex.com/search/_crpd/bnqT14362/b2a146vAT/PkYCal5pX_0NmehOcMzPHHy7C06KckIZICn0AmYXwL4sfiOmnbmZ84wUdWSM_OeQ3j6JRcz5OiOHHCiw2ffpR08bHsZOAEPpbOX4CgyY1xhglx7iOqbCwfiYAFvG6jHmZBY34tiMqfus-Kw",
  },
  {
    name: "Bing",
    url: "https://www.bing.com/search?q=",
    icon: "https://www.bing.com/favicon.ico",
  },
  {
    name: "Baidu",
    url: "https://www.baidu.com/s?wd=",
    icon: "https://www.baidu.com/favicon.ico",
  },
  {
    name: "DuckDuckGo",
    url: "https://duckduckgo.com/?q=",
    icon: "https://duckduckgo.com/favicon.ico",
  },
  {
    name: "Bilibili",
    url: "https://search.bilibili.com/all?keyword=",
    icon: "https://www.bilibili.com/favicon.ico",
  },
  {
    name: "Zhihu",
    url: "https://www.zhihu.com/search?type=content&q=",
    icon: "https://www.zhihu.com/favicon.ico",
  },
  {
    name: "Taobao",
    url: "https://s.taobao.com/search?q=",
    icon: "https://www.taobao.com/favicon.ico",
  },
  {
    name: "JD",
    url: "https://search.jd.com/Search?enc=utf-8&keyword=",
    icon: "https://www.jd.com/favicon.ico",
  },
];
