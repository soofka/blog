import { shallow } from 'enzyme';
import * as React from 'react';

import LinkIconsBar from 'components/LinkIconsBar';

describe('<LinkIconsBar/>', () => {

  it('renders correctly', () => {
    expect(shallow(<LinkIconsBar/>)).toMatchSnapshot();
  });

});
