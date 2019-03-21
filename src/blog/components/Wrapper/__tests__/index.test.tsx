import { shallow } from 'enzyme';
import * as React from 'react';

import { Wrapper } from '../';

describe('<Wrapper/>', () => {

  it('renders correctly', () => {
    expect(shallow(<Wrapper/>)).toMatchSnapshot();
  });

});
