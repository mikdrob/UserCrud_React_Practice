import mockAxios from 'jest-mock-axios';
import UserService from '../user-service'

const baseUrl = 'http://localhost:8080/api/v1/users';

it('Api call is sent to the right url', async () => {

    let catchFn = jest.fn(),
        thenFn = jest.fn();

    await UserService.getAll().then(thenFn).catch(catchFn);

    expect(mockAxios.get).toHaveBeenCalledWith(baseUrl);
});