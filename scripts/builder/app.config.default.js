const url = 'https://soofka.pl';
const feedUrl = `${url}/rss`;
const title = 'soofka.pl';
const author = {
  name: 'Jakub Sowiński',
  email: 'pansoofka@gmail.com',
  link: url,
};
const license = 'MIT';
const logoUrl = '/images/soofka-logo.jpg';
const icon128Url = '/images/soofka-icon-128.png';
const icon256Url = '/images/soofka-icon-256.png';
const icon512Url = '/images/soofka-icon-512.png';
const themeColor = '#000131';
const description = 'Personal blog of Jakub Sowiński. Focused on programming, mainly full stack web development.';
const categories = ['IT', 'blog'];
const socialMediaDescription = description;

module.exports = {
  url,
  feedUrl,
  title,
  author,
  license,
  description,
  categories,
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
      width: 128,
      height: 128,
      url: icon128Url,
    },
    {
      width: 256,
      height: 256,
      url: icon256Url,
    },
    {
      width: 512,
      height: 512,
      url: icon512Url,
    }
  ]
};
