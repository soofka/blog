import * as React from 'react';

// import highlightWorker from './highlight.worker';
// import WebWorker from 'common/WebWorker';

interface EntryContentPropsInterface {
  content: string;
}

declare const hljs: any;

export class EntryContent extends React.Component<EntryContentPropsInterface> {

  componentDidMount(): void {
    this.highlightCodeBlocks();

    // Example of Web Worker for future reference
    // if (Worker) {
    //   this.highlightCodeBlocksAsync();
    // } else {
    //   this.highlightCodeBlocks();
    // }
  }

  // highlightCodeBlocksAsync(): void {
  //   const codeBlocks = document.querySelectorAll('pre code');
  //   const worker = new WebWorker(highlightWorker);
  //
  //   worker.addEventListener('message', (event) => {
  //     const { code, codeBlockIndex } = event.data;
  //     codeBlocks[codeBlockIndex].innerHTML = code;
  //   });
  //
  //   codeBlocks.forEach((codeBlock, index) => {
  //     worker.postMessage([codeBlock.textContent, index]);
  //   });
  // }

  highlightCodeBlocks(): void {
    document.querySelectorAll('pre code').forEach((codeBlock: Node) => {
      hljs.highlightBlock(codeBlock);
    });
  }

  render(): JSX.Element {
    const { content } = this.props;

    return (
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    );
  }

}

export default EntryContent;
