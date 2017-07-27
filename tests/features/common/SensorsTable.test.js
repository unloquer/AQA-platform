import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { SensorsTable } from 'src/features/common';

describe('common/SensorsTable', () => {
  it('renders node with correct class name', () => {
    const renderedComponent = shallow(
      <SensorsTable />
    );

    expect(
      renderedComponent.find('.common-sensors-table').node
    ).to.exist;
  });
});
