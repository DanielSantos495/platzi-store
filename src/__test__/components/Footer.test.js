import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

// Ponemos solo footer, que indica que es el componente que estamos probando
describe('<Footer />', () => {
  // Probamos render del componente, con mount montamos el componente en el DOM
  const footer = mount(<Footer />);
  test('Render del componente footer', () => {
    // footer.length es para saber que estructura tiene. Así probamos que el componente hace render
    expect(footer.length).toEqual(1);
  });
  test('Render del titulo', () => {
    /* Aquí analizamos que el titulo haga render, buscando en la clase .Footer-title y que
    en ese elemento con esa clase tenga el titulo 'Platzi store', utilizamos text() para extraer
    el valor que esta en el elemento o sea 'Platzi store */
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

describe('Footer Snapshot', () => {
  test('Comprobar la UI de <Footer/>', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
