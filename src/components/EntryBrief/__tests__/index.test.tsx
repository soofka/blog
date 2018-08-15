import * as React from 'react';
import { shallow } from 'enzyme';

import EntryBrief from 'components/EntryBrief';

describe('<EntryBrief/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntryBrief
        text="testText"
      />,
    )).toMatchSnapshot();
  });

  it('renders correctly with optional props', () => {
    expect(shallow(
      <EntryBrief
        text="testText"
        imageFileName="testImageFileName"
        moreButtonLink="testMoreButtonLink"
      />,
    )).toMatchSnapshot();
  });

});
