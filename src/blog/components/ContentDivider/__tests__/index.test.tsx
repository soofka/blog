import { shallow } from 'enzyme';
import * as React from 'react';

import { ContentDivider } from '../';

describe('<ContentDivider/>', () => {

  it('renders correctly', () => {
    expect(shallow(<ContentDivider/>)).toMatchSnapshot();
  });

});
