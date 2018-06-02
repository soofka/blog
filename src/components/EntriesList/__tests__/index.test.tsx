import * as React from 'react';
import { shallow } from 'enzyme';

import EntriesList from 'components/EntriesList';

describe('<EntriesList/>', () => {

  it('renders correctly', () => {
    expect(shallow(<EntriesList entries={[]} isEntryFull={true}/>)).toMatchSnapshot();
  });

});
