import { shallow } from 'enzyme';
import * as React from 'react';

import { EntryBackLink } from '../';

describe('<EntryBackLink/>', () => {

  it('renders correctly', () => {
    expect(shallow(<EntryBackLink />)).toMatchSnapshot();
  });

});
