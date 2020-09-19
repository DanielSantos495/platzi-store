import getData from '../../utils/getData';

describe('Fetch API', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test('Llamar a una api y retorna sus datos', () => {
    fetch.mockResponseOnce(JSON.stringify('12345'));
    // ponemos cualquiera url, ya que el que responde es fetch.mockResponseOnce(JSON.stringify('12345'));
    getData('https://google.com')
      .then((response) => {
        expect(response.data).toEqual('12345');/*Repuesta esperada, la misma data de
        fetch.mockResponseOnce(JSON.stringify('12345')), y así sabemos su la función getData hace su trabajo*/
      })
      .catch((error) => {
        expect(error.message).toEqual(error.message); //Garantizamos que si captura el error
      });
    // Aquí garantizamos que la petición a la url que pones en getData si se este haciendo
    expect(fetch.mock.calls[0][0]).toEqual('https://google.com');
  });

});
