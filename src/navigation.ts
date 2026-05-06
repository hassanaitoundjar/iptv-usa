import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },

    {
      text: 'Installation',
      href: getPermalink('/install'),
    },
    {
      text: 'Blog',
      href: getPermalink('/blog'),
    },

    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },

  ],
  actions: [
    {
      text: 'Get Started',
      href: getPermalink('/pricing'),
    },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Navigation',
      links: [
        { text: 'Home', href: getPermalink('/') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Free Trial', href: getPermalink('/free-trial') },
        { text: 'Channels', href: getPermalink('/channels') },
        { text: 'Blog', href: getPermalink('/blog') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    IPTV Smarters PRO · All rights reserved.
  `,
};
