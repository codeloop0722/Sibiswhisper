import type { Site, Ui, Features } from './types'

export const SITE: Site = {
  website: 'https://sibiwhisper.xyz/',
  base: '/',
  title: 'Sibiswhisper - 思比的纸条',
  description:
    '思比的纸条的博客，分享生活记录创造。',
  author: 'Stephanie Lin',
  lang: 'zh-Hans',
  ogLocale: 'zh_CN',
  imageDomains: ['cdn.bsky.app', 'images.unsplash.com'],
}

export const UI: Ui = {
  internalNavs: [
    {
      path: '/blog',
      title: '新发布博客',
      displayMode: 'alwaysText',
      text: 'Blog',
    },
    {
      path: '/projects',
      title: 'Projects',
      displayMode: 'alwaysText',
      text: 'Projects',
    },
    {
      path: '/about',
      title: 'About',
      displayMode: 'alwaysText',
      text: 'About',
    },
 /*
    {
      path: '/highlights',
      title: 'Highlights',
      displayMode: 'iconToTextOnMobile',
      text: 'Highlights',
      icon: 'i-ri-screenshot-line',
    },
    */
    {
      path: '/photos',
      title: 'Photos',
      displayMode: 'iconToTextOnMobile',
      text: 'Photos',
      icon: 'i-ri-camera-ai-line',
    },
    {
      path: '/shorts',
      title: 'Shorts',
      displayMode: 'iconToTextOnMobile',
      text: 'Shorts',
      icon: 'i-meteor-icons-grid',
    },
    {
      path: '/changelog',
      title: 'Changelog',
      displayMode: 'iconToTextOnMobile',
      text: 'Changelog',
      icon: 'i-ri-draft-line',
    },
  ],
  socialLinks: [
    {
      link: 'https://space.bilibili.com/334918841?spm_id_from=333.1007.0.0',
      title: 'B站',
      displayMode: 'alwaysIcon',
      icon: 'i-fa6-brands-bilibili',
    },
    {
      link: 'https://www.douyin.com/user/MS4wLjABAAAA8k6Ta6_n8JIJ5ulT9Oz1S7GnUosBuSFRiOVDnY0QvkI',
      title: '抖音',
      displayMode: 'alwaysIcon',
      icon: 'i-icon-park-outline-tiktok',
    },
    {
      link: 'https://bsky.app/profile/astro.build',
      title: 'Astro on Bluesky',
      displayMode: 'alwaysIcon',
      icon: 'i-arcticons-xiaohongshu-rednote',
    },
  ],
  navBarLayout: {
    left: [],
    right: [
      'internalNavs',
      'hr',
      'socialLinks',
      'hr',
      'searchButton',
      'themeButton',
      'rssLink',
    ],
    mergeOnMobile: true,
  },
  tabbedLayoutTabs: [
    { title: 'Changelog', path: '/changelog' },
    { title: 'Streams', path: '/streams' },
  ],
  postView: {
    postMetaStyle: 'icon',
    useCoverAltAsCaption: false,
  },
  groupView: {
    maxGroupColumns: 3,
    showGroupItemColorOnHover: true,
  },
  githubView: {
    monorepos: [
      //'withastro/astro',
      //'withastro/starlight',
     // 'lin-stephanie/astro-loaders',
    ],
    mainLogoOverrides: [
     // [/starlight/, 'https://starlight.astro.build/favicon.svg'],
    ],
    subLogoMatches: [
     // [/theme/, 'i-unjs-theme-colors'],
      //[/github/, 'https://github.githubassets.com/favicons/favicon.svg'],
     // [/tweet/, 'i-prime-twitter'],
     // [/ins/, 'i-skill-icons-instagram'],
     // [/bluesky/, 'i-logos-bluesky'],
    ],
  },
  externalLink: {
    newTab: false,
    cursorType: 'url("/images/new-tab.svg") 10 10, pointer',
    showNewTabIcon: false,
  },
}

/**
 * Globally controls whether to enable special features:
 *  - Set to `false` or `[false, {...}]` to disable the feature.
 *  - Set to `[true, {...}]` to enable and configure the feature.
 */
export const FEATURES: Features = {
  slideEnterAnim: [true, { enterStep: 80 }],
  ogImage: [
    true,
    {
      authorOrBrand: `${SITE.title}`,
      fallbackTitle: `${SITE.description}`,
      fallbackBgType: 'plum',
      collections: [
        { collection: 'blog', pathnamePrefix: '/blog' },
        { collection: 'changelog', pathnamePrefix: '/changelog' },
        { collection: 'shorts', pathnamePrefix: '/shorts' },
      ],
    },
  ],
  toc: [
    true,
    {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
      displayPosition: 'right',
      displayMode: 'content',
    },
  ],
  share: [
    true,
    {
      twitter: [true, '@ste7lin'],
      bluesky: [true, '@ste7lin.bsky.social'],
      mastodon: false,
      facebook: false,
      pinterest: false,
      reddit: false,
      telegram: false,
      whatsapp: false,
      email: false,
    },
  ],
  giscus: [
    true,
    {
      'data-repo': 'lin-stephanie/astro-antfustyle-theme',
      'data-repo-id': 'R_kgDOLylKbA',
      'data-category': 'Giscus',
      'data-category-id': 'DIC_kwDOLylKbM4Cpugn',
      'data-mapping': 'title',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-lang': 'zh-cn',
    },
  ],
  search: [
    true,
    {
      includes: ['blog', 'shorts', 'changelog'],
      filter: true,
      navHighlight: true,
      batchLoadSize: [true, 5],
      maxItemsPerPage: [true, 3],
    },
  ],
  tag: [
    true,
    {
      displayPosition: 'right',
      displayMode: 'content',
      filterMode: 'AND',
    },
  ],
}
