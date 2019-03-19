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
  }

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
