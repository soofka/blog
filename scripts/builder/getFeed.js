const Feed = require('feed');
const appconfig = require('app.config.default');
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
  description: appconfig.meta.description,
  id: appconfig.url,
  link: appconfig.url,
  image: appconfig.image,
  copyright: "MIT license",
  feedLinks: {
    atom: `${appconfig.url}/feed`
  },
  author: appconfig.author,
});
