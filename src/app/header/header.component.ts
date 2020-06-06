import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private _jsonURL = 'assets/sample-notifications.json';
  public notifications = [];
  public user;
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.notifications = data;
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('user');
  }

}
