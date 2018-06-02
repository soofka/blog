import * as React from 'react';
import { shallow } from 'enzyme';

import EntryBrief from 'components/EntryBrief';

describe('<EntryBrief/>', () => {

  it('renders correctly', () => {
    expect(shallow(<EntryBrief text="test"/>)).toMatchSnapshot();
  });

  it('renders correctly with optional props', () => {
    expect(shallow(
    <EntryBrief
      text="tesText"
      imageFileName="testImageFileName"
      moreButtonLink="testMoreButtonLink"
    />)).toMatchSnapshot();
  });

});
