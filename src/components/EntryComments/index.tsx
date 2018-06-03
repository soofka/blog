import * as React from 'react';

interface EntryCommentsPropsInterface {
  title: string;
  url: string;
  shortName: string;
  identifier: string;
}

declare const DISQUS: any;

export class EntryComments extends React.Component<EntryCommentsPropsInterface, {}> {

  private disqusSetupAttempts: number = 0;

  componentDidMount(): void {
    const { title, url, shortName, identifier } = this.props;

    const disqusSetupAttempt = setInterval(
      () => {
        if (typeof DISQUS !== 'undefined') {
          DISQUS.reset({
            reload: true,
            config() {
              this.page.title = title;
              this.page.url = window.location.href;
              this.page.shortName = shortName;
              this.page.identifier = identifier;
            },
          });
          clearInterval(disqusSetupAttempt);
        }

        this.disqusSetupAttempts += 1;
        if (this.disqusSetupAttempts >= 3) {
          clearInterval(disqusSetupAttempt);
        }
      },
      1000,
    );
  }

  render(): JSX.Element {
    return (
      <div id="disqus_thread"></div>
    );
  }
}

export default EntryComments;
