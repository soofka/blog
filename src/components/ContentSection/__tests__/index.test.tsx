import * as React from 'react';
import { shallow } from 'enzyme';

import ContentSection from 'components/ContentSection';

describe('<ContentSection/>', () => {

  it('renders correctly', () => {
    expect(shallow(<ContentSection/>)).toMatchSnapshot();
  });

});
