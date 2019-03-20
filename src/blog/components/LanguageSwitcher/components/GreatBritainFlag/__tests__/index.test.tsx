import { shallow } from 'enzyme';
import * as React from 'react';

import GreatBritainFlag from 'components/LanguageSwitcher/components/GreatBritainFlag';

describe('<GreatBritainFlag/>', () => {

  it('renders correctly', () => {
    expect(shallow(<GreatBritainFlag/>)).toMatchSnapshot();
  });

  it('renders correctly with optional props', () => {
    expect(shallow(
      <GreatBritainFlag
        className="testClassName"
      />,
    )).toMatchSnapshot();
  });

});
