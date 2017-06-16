import { NgGithubSearcherPage } from './app.po';

describe('ng-github-searcher App', () => {
  let page: NgGithubSearcherPage;

  beforeEach(() => {
    page = new NgGithubSearcherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
