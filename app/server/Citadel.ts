import axios from 'axios';

export class CitadelClient {

    readonly basePath: string = "http://localhost:8000/api"

    get(path: string): void {
        console.log("GET to " + path)
        axios.get(this.basePath + path, { withCredentials: true })
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
        console.log("POST to " + path)
        axios.post(this.basePath + '/login/',
            { "username": "daniel", "password": "admin123" }, { withCredentials: true })
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