import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from './services/api-services.service';
import { Todo } from './shared/models/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {
  title = 'angular_fetching_api';
  newData: Todo[] = [];

  constructor(private _apiService: ApiServicesService){}
  
  ngOnInit(): void {
      this._apiService.getData().subscribe(res=>{
        this.newData=res
      })    
  }
}
