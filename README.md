# blog
This is my blog.

## Usage

```
npm install
```
```
npm start
```
Blog is available at `localhost:3000`.

## Changelog
### 1.3.6
- fixed issue with Disqus comments not appearing below the entry if entered from homepage
- added randomly changing logo
- added responsive embedded videos to posts

### 1.3.5
- added stylelint to build process 
- fixed all stylelint warnings
- added snapshot tests to each component

### 1.3.4
- added HTTPS
- added modifications to build process and service worker to work with HTTPS

### 1.3.3
- removed serviceworker-webpack-plugin, switched to sw-precache-webpack-plugin
- added auto generated assets to service worker file 

### 1.3.2
- fixed all tslint issues
- added last.fm link
- switched SVG icons to React components with SVGR

### 1.3.1
- introduced proper meta tags with social media support

### 1.3.0
- switched to entirely new application skeleton
- redefined whole build process

### 1.2.1
- added caching with service worker
- added offline support
- integrated service worker with build script
- fixed bug with tags breaking on mobile view 

### 1.2.0
- added proper favicon
- added basic PWA support
- added basic service worker

### 1.1.3
- added image optimization to static assets
- simplified static assets directory structure
- added twitter
- changed logo

### 1.1.0
- added temporary favicon
- added Disqus support
- added error messages
- added meta config
- reimplemented webpack config
- reimplemented webpack dev server script
- optimized external scripts loading
- optimized compression
- optimized caching
- removed license

### 1.0.0
- application skeleton
    - react
    - typescript
    - webpack
    - webpack dev server
    - jest
- basic application logic
    - entries
    - tags
    - archive
    - home page
    - error handling
- styling

# Backlog
## bugs
- specific metrics of google analytics

## ideas
- sorting entries
- error box styling
- "about" page
- "archive" pages
- loading indicator view with react-loadable
- better security with content based policy
- route based chunking
- random logo, selected from pool of a few different photos
- animated components
- nicer and more interactive code display in entries
