import axios, { AxiosResponse } from 'axios';

export class CitadelClient {

    readonly basePath: string = "http://localhost:8000/api"

    get(path: string): void {
        axios.get(this.basePath + path, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAzNzg0MzEwLCJpYXQiOjE3MDM3ODA3MTAsImp0aSI6IjNhMGFkZjNhNjU4YzQ4NTM4MjhkMGJmZWE0YWM3ZmIxIiwidXNlcl9pZCI6Mn0.GjErsO1iHsBIWmgB39UHEUluWtJbRe4V6CIOzW29AX-XOA9cQB-2VxUfRgJhBKTGRANarrJyHTDLtfKzTGb5Ww"
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