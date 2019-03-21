import { shallow } from 'enzyme';
import * as React from 'react';

import { EntryHeaderTitle } from '../';

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
