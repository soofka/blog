import { shallow } from 'enzyme';
import * as React from 'react';

import { Header } from '../';

describe('<Header/>', () => {

  it('renders correctly', () => {
    expect(shallow(<Header/>)).toMatchSnapshot();
  });

});
