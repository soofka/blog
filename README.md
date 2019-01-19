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
### 1.4.2
- added automated entries parser
- simplified content structure in code
- fixed multiple bugs in entries
- added link to blog on github to index.html source code
- removed some of unused assets
- `npm audit fix`

### 1.4.1
- added RSS feed
- added automated and user-triggered page scrolling
- made meta tags variable based on current route and language

### 1.4.0
- simplified UI
- added syntax highlight to code samples in entries

### 1.3.10
- removed Sass-based styling
- added Styled Components
- added snapshot test for Styled Components

### 1.3.9
- added MobX
- refined TSLint rules
- reorganized folder structure
- reorganized data flow in components

### 1.3.8
- added lectures as PDF files
- moved all links to blog from HTTP to HTTPS

### 1.3.7
- reorganized folder structure
- added code examples

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
### major
- HTTPS does not work properly on Firefox
- lack of tests

### minor
- specific metrics of google analytics are not being recorder properly
- `any`

## improvements
### major
- polish language version
- "about" page
- "archive" pages
- "lectures and trainings" page
- "back to top" button
- social media feed below newest posts, with differentiation between all feed sources
- image optimization in build process

### minor
- sorting entries
- error box styling
- loading indicator view with react-loadable
- better security with content based policy
- route based chunking
- animated components with [pose](https://popmotion.io/pose/learn/route-transitions-reach-router/)
- compilation to WebAssembly
- different route paths per language
- move entries and entry content to global state to avoid loading them again with each rerender
- rethink styling variables and redo them properly
- optimize header post images
- add rss feed meta tag generation to React component (but keep generating feed files in build plan)
- update TypeScript to ^3.0.0
- refine meta tags (Slack doesn't load them properly)
- add keyboard mappings for increased accessibility
