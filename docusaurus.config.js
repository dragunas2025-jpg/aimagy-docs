
const config = {
  title: 'Aimagy Docs',
  tagline: 'Documentation for Aimagy AI image tools',
  url: 'https://docs.aimagy.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'dragunas2025-jpg',
  projectName: 'aimagy-docs',
  trailingSlash: true,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/dragunas2025-jpg/aimagy-docs/edit/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Aimagy Docs',
      items: [
        {to: '/welcome/', label: 'Welcome', position: 'left'},
        {to: '/krita/flash-banana/overview/', label: 'Krita', position: 'left'},
        {
          to: '/photoshop/ai-generator/overview/',
          label: 'Photoshop',
          position: 'left',
        },
        {to: '/shared/api-providers/', label: 'Shared guides', position: 'left'},
        {to: '/support/faq/', label: 'Support', position: 'left'},
        {
          href: 'https://github.com/dragunas2025-jpg/aimagy-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Products',
          items: [
            {label: 'Krita: Flash Banana', to: '/krita/flash-banana/overview/'},
            {
              label: 'Photoshop: AI Generator',
              to: '/photoshop/ai-generator/overview/',
            },
          ],
        },
        {
          title: 'Help',
          items: [
            {label: 'FAQ', to: '/support/faq/'},
            {label: 'Contact', to: '/support/contact/'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aimagy.`,
    },
  },
};

module.exports = config;
