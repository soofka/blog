import * as React from 'react';
import { shallow } from 'enzyme';

import Entry from 'containers/Entry';

describe('<Entry/>', () => {

  it('renders correctly', () => {
    expect(shallow(<Entry
      title="testTitle"
      tags={['tag1', 'tag2', 'tag3']}
      brief={null}
      created="testCreated"
      updated="testUpdated"
      contentFileName="testContentFileName"
      isFull={true}
    />)).toMatchSnapshot();
  });

});
