import * as React from 'react';
import { shallow } from 'enzyme';

import EntryComments from 'components/EntryComments';

describe('<EntryComments/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntryComments
        title="testTitle"
        url="testUrl"
        shortName="testShortName"
        identifier="testIdentifier"
      />)).toMatchSnapshot();
  });

});
