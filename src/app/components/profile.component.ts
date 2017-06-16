import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent {
  private user: any[];
  private repos: any[];
  private userName: string;

  private timeHandler: any;

  public constructor(private _githubService: GithubService) {
    this.user = null;
  }

  public searchUser() {
    if (this.userName != "" && this.userName != null) {
      this._githubService.updateUser(this.userName);

      this._githubService.getUser().subscribe(user => {
        this.user = user;
      });

      this._githubService.getRepos().subscribe(repos => {
        this.repos = repos;
      });
    }
  }
}

