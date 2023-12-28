import axios, { AxiosResponse } from 'axios';

export class CitadelClient {

    readonly basePath: string = "http://localhost:8000/api"

    isLoggedIn() {

    }

    login(username: string, password: string) {

    }

    maybeRefreshAuthorizationToken() {

    }

    get(path: string): void {
        axios.get(this.basePath + path, {
            headers: {
                "Authorization": "Bearer {}"
            }
        })
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }

    post(path: string, data: any): Promise<AxiosResponse> {
        return axios.post(this.basePath + path,
            data, {})

    }
}