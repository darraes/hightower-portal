import axios from 'axios';

export class CitadelClient {

    readonly basePath: string = "http://127.0.0.1:8000/api"

    get(path: string): void {
        axios.get(this.basePath + '/property/1/', { withCredentials: true })
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

    post(path: string): void {
        axios.post(this.basePath + '/login/', { withCredentials: true, "username": "daniel", "password": "admin123" })
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
}