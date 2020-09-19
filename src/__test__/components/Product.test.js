import React from 'react';
import { mount, shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import ProductMock from '../../__mocks__/ProductMock';
import Product from '../../components/Product';

describe('<Product />', () => {
  test('Render del componente Product', () => {
    const product = shallow(
      <ProviderMock>
        <Product />
      </ProviderMock>,
    );
    expect(product.length).toEqual(1);
  });
  test('Comprobar el boton de compra', () => {
    const handleAddToCart = jest.fn();
    const wrapper = mount(
      <ProviderMock>
        <Product //Este es product real, y le pasamos a sus props los Mock que tenemos para probar
          product={ProductMock}//Pasamos el mock de productos
          handleAddToCart={handleAddToCart} /*La función que simulamos con jest, pero que es la que
          esta en el componente, pues es la que estamos probando*/
        />
      </ProviderMock>,
    );
    wrapper.find('button').simulate('click');//Buscamos el botton y simulamos un Click
    expect(handleAddToCart).toHaveBeenCalledTimes(1);//Probamos la ejecución de la fucnión.
  });
});
