/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ETF2L Rules',
  tagline: 'Ruleset for tournaments organised by us',
  url: 'https://rules.etf2l.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'etf2l',
  projectName: 'rules',
  themeConfig: {
    navbar: {
      title: 'ETF2L Rules',
      logo: {
        alt: 'ETF2L Site Logo',
        src: 'img/ETF2L_logo_dark.svg',
        srcDark: 'img/ETF2L_logo_light.svg',
      },
      items: [
        {
          to: 'docs/general-rules',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'General Rules',
              to: 'docs/general-rules',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Our website',
              href: 'https://etf2l.org/',
            },
            {
              label: 'Our API',
              href: 'https://api.etf2l.org/',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/BNvUmTD',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/etf2l/rules',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ETF2L Staff. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/etf2l/rules/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
