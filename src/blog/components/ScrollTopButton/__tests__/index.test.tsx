import { shallow } from 'enzyme';
import * as React from 'react';

import ScrollTopButton from 'components/ScrollTopButton';

describe('<ScrollTopButton/>', () => {

  it('renders correctly', () => {
    expect(shallow(<ScrollTopButton/>)).toMatchSnapshot();
  });

});
