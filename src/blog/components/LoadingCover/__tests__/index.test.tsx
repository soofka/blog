import { shallow } from 'enzyme';
import * as React from 'react';

import LoadingCover from 'components/LoadingCover';

describe('<LoadingCover/>', () => {

  it('renders correctly', () => {
    expect(shallow(<LoadingCover/>)).toMatchSnapshot();
  });

});
