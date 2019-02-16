import * as React from 'react';
import { shallow } from 'enzyme';

import Main from 'components/Main';

describe('<Main/>', () => {

  it('renders correctly', () => {
    expect(shallow(<Main/>)).toMatchSnapshot();
  });

});
