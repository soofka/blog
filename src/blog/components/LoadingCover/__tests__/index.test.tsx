import { shallow } from 'enzyme';
import * as React from 'react';

import { LoadingCover } from '../';

describe('<LoadingCover/>', () => {

  it('renders correctly', () => {
    expect(shallow(<LoadingCover/>)).toMatchSnapshot();
  });

});
