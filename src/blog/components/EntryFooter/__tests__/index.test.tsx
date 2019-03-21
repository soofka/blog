import { shallow } from 'enzyme';
import * as React from 'react';

import { EntryFooter } from '../';

describe('<EntryFooter/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntryFooter
        title="testTitle"
        niceUrl="testNiceUrl"
        niceUrlWithBasePath="testNiceUrlWithBasePath"
      />,
    )).toMatchSnapshot();
  });

});
