import { shallow } from 'enzyme';
import * as React from 'react';

import Main from 'components/Main';

describe('<Main/>', () => {

  it('renders correctly', () => {
    expect(shallow(<Main/>)).toMatchSnapshot();
  });

});
