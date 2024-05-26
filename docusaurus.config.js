/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ETF2L Rules',
  tagline: 'Ruleset for tournaments organised by ETF2L',
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
          to: 'docs/general-1',
          activeBasePath: 'docs',
          label: 'General Rules',
          position: 'left',
        },
        {
          to: 'docs/6v6-1',
          activeBasePath: 'docs',
          label: '6v6 Rules',
          position: 'left',
        },
        {
          to: 'docs/9v9-1',
          activeBasePath: 'docs',
          label: '9v9 Rules',
          position: 'left',
        },
        {
          to: 'docs/server-configs',
          activeBasePath: 'docs',
          label: 'Server Configs',
          position: 'left',
        },
        {
          to: 'docs/latest-rules-updates',
          activeBasePath: 'docs',
          label: 'Latest Rule Changes',
          position: 'right',
        },
        {
          to: 'docs/latest-config-updates',
          activeBasePath: 'docs',
          label: 'Latest Config Changes',
          position: 'right',
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
              to: 'docs/general-1',
              label: 'General Rules',
            },
            {
              to: 'docs/6v6-1',
              label: '6v6 Rules',
            },
            {
              to: 'docs/9v9-1',
              label: '9v9 Rules',
            },
            {
              to: 'docs/server-configs',
              label: 'Server Configs',
            },
            {
              to: 'docs/latest-rules-updates',
              label: 'Latest Rule Changes',
            },
            {
              to: 'docs/latest-config-updates',
              label: 'Latest Config Changes',
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
//          editUrl:
//            'https://github.com/etf2l/rules/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
