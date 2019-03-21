import { shallow } from 'enzyme';
import * as React from 'react';

import { EntryComments } from '../';

describe('<EntryComments/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntryComments
        title="testTitle"
        url="testUrl"
        shortName="testShortName"
        identifier="testIdentifier"
      />,
    )).toMatchSnapshot();
  });

});
