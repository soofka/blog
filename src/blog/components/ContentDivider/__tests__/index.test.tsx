import * as React from 'react';
import { shallow } from 'enzyme';

import ContentDivider from 'components/ContentDivider';

describe('<ContentDivider/>', () => {

  it('renders correctly', () => {
    expect(shallow(<ContentDivider/>)).toMatchSnapshot();
  });

});
