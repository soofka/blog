import * as React from 'react';
import { shallow } from 'enzyme';

import Navigation from 'components/Navigation';

describe('<Navigation/>', () => {

  it('renders correctly', () => {
    expect(shallow(<Navigation/>)).toMatchSnapshot();
  });

});
