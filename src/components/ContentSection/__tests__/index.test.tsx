import * as React from 'react';
import { shallow } from 'enzyme';

import ContentSection from 'components/ContentSection';
import { StyledContentSection } from 'components/ContentSection/styled';

describe('<ContentSection/>', () => {

  it('renders correctly', () => {
    expect(shallow(<ContentSection/>)).toMatchSnapshot();
  });

  it('is styled correctly', () => {
    expect(shallow(<StyledContentSection/>)).toMatchSnapshot();
  });

});
