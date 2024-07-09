import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  users : any=[];
  isLoading = false;
  constructor() {
    this.getData();
  }

  async getData(){
    this.isLoading = true;
    const _users = await
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((res) => res.json())
      .then((json) => {
        return json;
      });
      this.isLoading = false
      this.users = _users
  }
}
