import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface User {
  no: number;
  name: string;
}

@Component({
  selector: 'app-test_api',
  templateUrl: './test_api.component.html',
  styleUrls: ['./test_api.component.css']
})
export class TestApiComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  usr_list:User[] = [];

  // request data
  get_data_via_api(){
    this.usr_list = [];

    let url = 'http://150.230.106.42:8080/queryUserName';
    this.http.get(url).subscribe(res=>{
      let tmp: any = res;
      for (let i=0; i i<tmp.length; i++) {
          this.usr_list.push({
            "no" : i+1,
            "name": tmp[i]
          })
      }
    })
  }

  // clear user data
  clear_data(){
    this.usr_list = [];
  }
  
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  displayedColumns: string[] = ['no', 'name'];
  dataSource = this.usr_list;
}
