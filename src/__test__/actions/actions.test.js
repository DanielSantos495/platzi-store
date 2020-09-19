import actions from '../../actions/index';
import ProductMock from '../../__mocks__/ProductMock';

describe('Actions', () => {
  const payload = ProductMock;
  test('addToCart action', () => {
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    //El actions real, recibe nuestro Mock como payload y lo compara con expected que es lo esperado
    expect(actions.addToCart(payload)).toEqual(expected);
  });
  test('removeToCart', () => {
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});
