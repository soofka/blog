# @soofka/blog
Personal blog of Jakub Sowiński, implemented in React and Typescript.

## Usage
```
npm install
```
```
npm start
```
Blog is available at `localhost:3000`.

## Changelog
### 2.1.0
- enabled language switcher
- added first post translation in Polish

### 2.0.0
- added sidebar
- moved social media icons to sidebar
- added archive page
- added talks page
- added route based chunking for new pages
- added tags cloud
- created data generation mechanism that generates different JSON files for entries, archives, tags, and talks 
- reimplemented routing in order to take entry and tag ID instead of name into account (support for multi language version)
- set up different route paths per language for homepage, each entry, and archive and tag pages
- made "back to top" button visible whenever user is not on top and sticky to the bottom of the page
- added new post
- `npm audit fix` again

### 1.8.1
- added automated entries parser
- simplified content structure in code
- fixed multiple bugs in entries
- added link to blog on github to index.html source code
- removed some of unused assets
- `npm audit fix`

### 1.8.0
- added RSS feed
- added automated and user-triggered page scrolling
- made meta tags variable based on current route and language

### 1.7.0
- simplified UI
- added syntax highlight to code samples in entries

### 1.6.6
- removed Sass-based styling
- added Styled Components
- added snapshot test for Styled Components

### 1.6.5
- added MobX
- refined TSLint rules
- reorganized folder structure
- reorganized data flow in components

### 1.6.4
- added lectures as PDF files
- moved all links to blog from HTTP to HTTPS

### 1.6.3
- reorganized folder structure
- added code examples

### 1.6.2
- fixed issue with Disqus comments not appearing below the entry if entered from homepage
- added randomly changing logo
- added responsive embedded videos to posts

### 1.6.1
- added stylelint to build process 
- fixed all stylelint warnings
- added snapshot tests to each component

### 1.6.0
- added HTTPS
- added modifications to build process and service worker to work with HTTPS

### 1.5.2
- removed serviceworker-webpack-plugin, switched to sw-precache-webpack-plugin
- added auto generated assets to service worker file 

### 1.5.1
- fixed all tslint issues
- added last.fm link
- switched SVG icons to React components with SVGR

### 1.5.0
- introduced proper meta tags with social media support

### 1.4.0
- switched to entirely new application skeleton
- redefined whole build process

### 1.3.1
- added caching with service worker
- added offline support
- integrated service worker with build script
- fixed bug with tags breaking on mobile view 

### 1.3.0
- added proper favicon
- added basic PWA support
- added basic service worker

### 1.2.0
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
### major
- HTTPS does not work properly on Firefox
- lack of tests

### minor
- specific metrics of google analytics are not being recorder properly
- `any`

## improvements
### major
- polish language version
- social media feed below newest posts, with differentiation between all feed sources
- image optimization in build process

### minor
- sorting entries
- error box styling
- loading indicator view with react-loadable
- better security with content based policy
- animated components with [pose](https://popmotion.io/pose/learn/route-transitions-reach-router/)
- compilation to WebAssembly
- move entries and entry content to global state to avoid loading them again with each rerender
- rethink styling variables and redo them properly
- optimize header post images
- update TypeScript to ^3.0.0
- add keyboard mappings for increased accessibility
