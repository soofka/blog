import { shallow } from 'enzyme';
import * as React from 'react';

import { GreatBritainFlag } from '../';

describe('<GreatBritainFlag/>', () => {

  it('renders correctly', () => {
    expect(shallow(<GreatBritainFlag/>)).toMatchSnapshot();
  });

  it('renders correctly with custom class', () => {
    expect(shallow(
      <GreatBritainFlag
        className="testClassName"
      />,
    )).toMatchSnapshot();
  });

});
