import reducer from '../../reducers/index';
import ProductMock from '../../__mocks__/ProductMock';

describe('Reducers', () => {

  test('Retornar initalState', () => {
    //Reducer recibe  (initalState y, action); le ponemos datos dummie para la prueba de retornar
    expect(reducer({}, '')).toEqual({});/*Lo que debería retornar es un objeto vacio, ya que es lo
    lo que le pasamos en el expect y no hara match con ningún 'action', entonces retornara el estado
    puro*/
  });

  test('ADD_TO_CART', () => {
    const initialState = {//creamos el initialState
      cart: [],
    };
    const payload = ProductMock; //Creamos el payload con nuestro Mock
    const action = { //Creamos el action que vamos apasar a nuestra prueba
      type: 'ADD_TO_CART',
      payload,
    };
    const expected = { //Lo que esperamos que pase, lo que va en toEqual
      cart: [
        ProductMock,
      ],
    };
    // Pasamos el reducer (Que es el de Original) y los datos que simulamos y lo que esperamos que pase
    expect(reducer(initialState, action)).toEqual(expected);
  });

  test('REMOVE_FROM_CART', () => {
    const initalState = {
      cart: [
        ProductMock,
      ],
    };
    const payload = ProductMock;
    const action = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    const expected = {
      cart: [],
    };
    expect(reducer(initalState, action)).toEqual(expected);
  });
});
