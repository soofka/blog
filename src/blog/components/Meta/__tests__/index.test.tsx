import { shallow } from 'enzyme';
import * as React from 'react';

import Meta from 'components/Meta';

describe('<Meta/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <Meta/>,
    )).toMatchSnapshot();
  });

  it('renders correctly with optional props', () => {
    expect(shallow(
      <Meta
        title="testTitle"
        subtitle="testSubtitle"
        description="testDescription"
        keywords="testKeywords"
        imageUrl="testImageUrl"
      />,
    )).toMatchSnapshot();
  });

});
