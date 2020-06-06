import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  private _jsonURL = 'assets/sample-data.json';
  public taskList = [];
  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      this.taskList = data;
    });
  }
  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }
  ngOnInit() {
  }

}
