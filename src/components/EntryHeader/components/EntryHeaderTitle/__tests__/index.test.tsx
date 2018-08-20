import * as React from 'react';
import { shallow } from 'enzyme';

import EntryHeaderTitle from 'components/EntryHeader/components/EntryHeaderTitle';

describe('<EntryHeaderTitle/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntryHeaderTitle
        title="testTitle"
        link="testTitleLink"
      />,
    )).toMatchSnapshot();
  });

});
