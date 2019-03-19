import * as React from 'react';
import { Helmet } from 'react-helmet';

export interface MetaPropsInterface {
  title?: string;
  subtitle?: string;
  description?: string;
  keywords?: string;
  imageUrl?: string;
}

export const Meta = (props: MetaPropsInterface) => {
  const { title, subtitle, description, keywords, imageUrl } = props;

  const metaElements = [];

  if (title) {
    metaElements.push(
      <title key="title">{title}</title>,
      <meta key="og:site_name" property="og:site_name" content={title} />,
      <meta key="twitter:site" property="twitter:site" content={title} />,
      subtitle
        ? <meta key="twitter:title" property="twitter:title" content={subtitle} />
        : <meta key="twitter:title" property="twitter:title" content={title} />,
    );
  }

  if (description) {
    metaElements.push(
      <meta key="description" name="description" content={description} />,
      <meta key="og:description" property="og:description" content={description} />,
      <meta key="twitter:description" property="twitter:description" content={description} />,
    );
  }

  if (keywords) {
    metaElements.push(
      <meta key="keywords" name="keywords" content={keywords} />,
    );
  }

  if (imageUrl) {
    metaElements.push(
      <meta key="og:image" name="og:image" content={imageUrl} />,
      <meta key="twitter:image" name="twitter:image" content={imageUrl} />,
    );
  }

  return(
    <Helmet>
      {metaElements}
    </Helmet>
  );
};

export default Meta;
