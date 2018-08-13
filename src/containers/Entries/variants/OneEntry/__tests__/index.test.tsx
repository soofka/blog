import * as React from 'react';
import { shallow } from 'enzyme';

import OneEntry from 'containers/Entries/variants/OneEntry';

describe('<Entry/>', () => {

  it('renders correctly', () => {
    expect(shallow(<OneEntry/>)).toMatchSnapshot();
  });

});
