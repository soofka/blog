import * as React from 'react';
import { shallow } from 'enzyme';

import InfoSection from 'components/InfoSection';

describe('<InfoSection/>', () => {

  it('renders correctly', () => {
    expect(shallow(<InfoSection/>)).toMatchSnapshot();
  });

});
