import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private userName: string;
    private clientId = 'b8005c885c62b045d606';
    private cliendSecret = '5c828d66415320b587038fd385594e3f72b0639e';

    public constructor(private _http: Http) {
        this.userName = 'alyasko';

        console.log('Github Service Ready');
    }

    public getUser() {
        return this._http.get(
            'https://api.github.com/users/' + this.userName +
            '?client_id' + this.clientId +
            '&client_secret=' + this.cliendSecret)
            .map(res => res.json());
    }

    public getRepos() {
        return this._http.get(
            'https://api.github.com/users/' + this.userName +
            '/repos?client_id' + this.clientId +
            '&client_secret=' + this.cliendSecret)
            .map(res => res.json());
    }

    public updateUser(userName: string) {
        this.userName = userName;
    }
}