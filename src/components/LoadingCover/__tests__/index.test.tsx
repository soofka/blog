import * as React from 'react';
import { shallow } from 'enzyme';

import LoadingCover from 'components/LoadingCover';

describe('<LoadingCover/>', () => {

  it('renders correctly', () => {
    expect(shallow(<LoadingCover/>)).toMatchSnapshot();
  });

});
