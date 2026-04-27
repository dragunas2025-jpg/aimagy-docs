
module.exports = {
  title: 'Aimagy Docs',
  url: 'https://docs.aimagy.com',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'aimagy',
  projectName: 'aimagy-docs',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
