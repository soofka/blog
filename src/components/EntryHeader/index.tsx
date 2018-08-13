import * as React from 'react';
import { Link } from 'react-router-dom';

import RoutingProvider from 'common/RoutingProvider';
import LabelsProvider from 'common/LabelsProvider';

import './styles.scss';

interface EntryHeaderPropsInterface {
  language: string;
  title: string;
  titleLink: string;
  tags: string[];
  created: string;
  updated: string;
}

export const EntryHeader = (props: EntryHeaderPropsInterface): JSX.Element => {
  const { language, title, titleLink, tags, created, updated } = props;

  return (
    <div className="entry-header">
      <h1 className="entry-header--title">
        <Link to={titleLink}>{title}</Link>
      </h1>
      <p className="entry-header--meta">
        {LabelsProvider.getLabel('entry__created', language)}
        <span>{created}</span>
        {LabelsProvider.getLabel('entry__last_updated', language)}
        <span>{updated}</span>
      </p>
      <p className="entry-header--tags">
        {tags.map((tag: string, index: number) => {
          return (
            <Link
              key={index}
              /* tslint:disable-next-line */
              to={`${RoutingProvider.getEntriesByTagNiceUrlBasePath()}/${RoutingProvider.parseTextToNiceUrl(tag)}`}
            >
              {tag}
            </Link>
          );
        })}
      </p>
    </div>
  );
};

export default EntryHeader;
