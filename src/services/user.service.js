import createApiClient from './api.service';

class UserService {
    constructor(baseUrl = '/account') {
        this.api = createApiClient(baseUrl);
    }

    async register(data) {
        return (await this.api.post('/create', data)).data;
    }

    async login(data) {
        return (await this.api.post('/login', data)).data;
    }
}

export default new UserService();