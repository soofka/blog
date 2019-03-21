import { shallow } from 'enzyme';
import * as React from 'react';

import { PolandFlag } from '../';

describe('<PolandFlag/>', () => {

  it('renders correctly', () => {
    expect(shallow(<PolandFlag/>)).toMatchSnapshot();
  });

  it('renders correctly with custom class', () => {
    expect(shallow(
      <PolandFlag
        className="testClassName"
      />,
    )).toMatchSnapshot();
  });

});
