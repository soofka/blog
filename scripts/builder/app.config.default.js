const url = 'https://soofka.pl';
const title = 'soofka.pl';
const author = {
  name: 'Jakub Sowiński',
  email: 'pansoofka@gmail.com',
  link: url,
};
const logoUrl = '/images/soofka-logo.jpg';
const icon128Url = '/images/soofka-icon-128.png';
const themeColor = '#000131';
const description = 'Personal blog of Jakub Sowiński. Focused on programming, mainly full stack web development.';
const socialMediaDescription = '';

module.exports = {
  url,
  title,
  description,
  author,
  image: logoUrl,
  favicon: `${url}/favicon.png`,
  meta: [
    {
      name: 'author',
      content: `${author.name} <${author.email}> (${author.link})`,
    },
    {
      name: 'keywords',
      content: 'html, css, php, javascript, react',
    },
    {
      name: 'description',
      content: description,
    },
    {
      name: 'theme-color',
      content: themeColor,
    },
    {
      property: 'og:site_name',
      content: title,
    },
    {
      property: 'og:description',
      content: socialMediaDescription,
    },
    {
      property: 'og:image',
      content: logoUrl,
    },
    {
      property: 'twitter:site',
      content: title,
    },
    {
      property: 'twitter:card',
      content: 'tile',
    },
    {
      property: 'twitter:title',
      content: title,
    },
    {
      property: 'twitter:description',
      content: socialMediaDescription,
    },
    {
      property: 'twitter:image',
      content: logoUrl,
    },
    {
      name: 'msapplication-TileColor',
      content: themeColor,
    },
    {
      name: 'msapplication-TileImage',
      content: logoUrl,
    },
  ],
  icons: [
    {
      rel: 'apple-touch-icon',
      href: icon128Url,
    },
    {
      rel: 'icon',
      sizes: '128x128',
      type: 'image/png',
      href: icon128Url,
    },
  ]
};
