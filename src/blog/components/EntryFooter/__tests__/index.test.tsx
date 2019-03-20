import { shallow } from 'enzyme';
import * as React from 'react';

import EntryFooter from 'components/EntryFooter';

describe('<EntryFooter/>', () => {

  it('renders correctly', () => {
    expect(shallow(<EntryFooter/>)).toMatchSnapshot();
  });

});
