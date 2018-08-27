const fs = require('fs');
const Feed = require('feed').Feed;
const appconfig = require('./app.config.default');
const entries = require('../../content/entries.en');

// @TODO:
// - install feed from npm
// - create scripting generating feed based on entries.en.json
// -- possibly use AssetsProvider?
// - add feed to build process
// -- use getFeed in getConfig
// -- use feed.rss2(), feed.atom1(), feed.json1() in getFeed
// - add feed link to index.ejs
const feed = new Feed({
  title: appconfig.title,
  description: appconfig.description,
  id: appconfig.url,
  link: appconfig.url,
  image: `${appconfig.url}${appconfig.image}`,
  copyright: "MIT license",
  feedLinks: {
    rss: `${appconfig.url}/rss`,
    json: `${appconfig.url}/feed`,
    atom: `${appconfig.url}/atom`,
  },
  author: appconfig.author,
});

const getUrlFromTitle = (title) => {
  return `${appconfig.url}/entry/${title
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[!|?|.|,|:|;]/g, '')}`;
};

const getImageUrl = (imageFileName) => {
  return `${appconfig.url}/images/${imageFileName}`;
};

entries.forEach((entry) => {
  feed.addItem({
    title: entry.title,
    id: entry.id,
    link: getUrlFromTitle(entry.title),
    description: entry.brief.text,
    content: entry.brief.text,
    author: [appconfig.author],
    date: new Date(entry.created),
    image: getImageUrl(entry.brief.imageFileName),
  });
});

feed.addCategory('IT');
feed.addContributor(appconfig.author);

fs.writeFileSync('assets/rss.xml', feed.rss2());
fs.writeFileSync('assets/atom.xml', feed.atom1());
fs.writeFileSync('assets/feed.json', feed.json1());
