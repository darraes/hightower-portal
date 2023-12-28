import axios, { AxiosResponse } from 'axios';

export class CitadelClient {

    readonly basePath: string = "http://localhost:8000/api"

    isLoggedIn() {
        // Check local storage for Tokens & time. If under [X] minutes, return True
        // Call verify token endpoint. Return true if verified
        // Return false otherwise
    }

    login(username: string, password: string) {
        // Do POST to login endpoint
        // Store locally
        // - Access Token
        // - Refresh Token
        // - Login UTC datetime as Access Token time
    }

    maybeRefreshAuthorizationToken() : boolean {
        // Check if user is logged in
        // If no, return false
        // if logged in and its been more than 5 minutes from last refresh, refresh it
        return true
    }

    get(path: string): void {
        axios.get(this.basePath + path, {
            headers: {}
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