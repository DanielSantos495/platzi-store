import React from 'react';
import { mount, shallow } from 'enzyme'; //shallow nos permite probar solo un elemento del componente y no todo.
import { create } from 'react-test-renderer';
import Header from '../../components/Header';
import ProviderMock from '../../__mocks__/ProviderMock';

describe('<Header />', () => {

  test('Render del componente', () => {
    const header = shallow(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.length).toEqual(1);
  });
  test('Render del titulo', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});

describe('Header Snapshot', () => {
  test('Probar UI de <Header />', () => {

    const header = create(
      <ProviderMock>
        <Header />
      </ProviderMock>,
    );
    expect(header.toJSON()).toMatchSnapshot();

  });
});
