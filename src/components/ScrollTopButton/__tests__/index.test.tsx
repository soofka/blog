import * as React from 'react';
import { shallow } from 'enzyme';

import ScrollTopButton from 'components/ScrollTopButton';

describe('<ScrollTopButton/>', () => {

  it('renders correctly', () => {
    expect(shallow(<ScrollTopButton/>)).toMatchSnapshot();
  });

});
