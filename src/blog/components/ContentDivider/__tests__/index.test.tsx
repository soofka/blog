import { shallow } from 'enzyme';
import * as React from 'react';

import ContentDivider from 'components/ContentDivider';

describe('<ContentDivider/>', () => {

  it('renders correctly', () => {
    expect(shallow(<ContentDivider/>)).toMatchSnapshot();
  });

});
