import { shallow } from 'enzyme';
import * as React from 'react';

import EntriesList from 'components/EntriesList';

describe('<EntriesList/>', () => {

  it('renders correctly', () => {
    expect(shallow(
      <EntriesList
        entries={[]}
        fullEntry={true}
      />,
    )).toMatchSnapshot();
  });

});
