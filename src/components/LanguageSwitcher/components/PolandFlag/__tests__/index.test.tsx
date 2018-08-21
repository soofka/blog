import * as React from 'react';
import { shallow } from 'enzyme';

import PolandFlag from 'components/LanguageSwitcher/components/PolandFlag';

describe('<PolandFlag/>', () => {

  it('renders correctly', () => {
    expect(shallow(<PolandFlag/>)).toMatchSnapshot();
  });

  it('renders correctly with optional props', () => {
    expect(shallow(
      <PolandFlag
        className="testClassName"
      />,
    )).toMatchSnapshot();
  });

});
