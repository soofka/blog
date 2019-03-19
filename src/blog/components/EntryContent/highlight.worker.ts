export default () => {
  self.addEventListener('message', (event) => {
    try {
      importScripts('https://soofka.pl/scripts/highlight/highlight.pack.js');
      const result = self.hljs.highlightAuto(event.data[0]);
      postMessage({ code: result.value, codeBlockIndex: event.data[1] });
    } catch (e) {
      postMessage({ ...e });
    }
  });
};
