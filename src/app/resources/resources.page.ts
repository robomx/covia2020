import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Papa } from 'ngx-papaparse';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})
export class ResourcesPage implements OnInit {

  arrayBuffer:any;
  file:File;
  csvData : any[] = [];
  headerRow : any[] = [];

  constructor(
    public http : HttpClient,
    private router: Router,
    private papa : Papa
  ) { 
    this.loadCSV();
  }

  ngOnInit() {
    
  }

  info() {
    this.router.navigate(['/tabs/info'])
  }

  private loadCSV(){
    
  this.http.get(AppComponent.base + 'resources.csv', {
      responseType : 'text'
    }).subscribe(
      data => this.extractData(data),
      error => console.log(error)
    )
  }

  extractData(res){
    let csvData = res || '';

    this.papa.parse(csvData ,{
      complete : parsedData => {
        this.headerRow = parsedData.data.splice(0,1)[0];
        this.csvData = parsedData.data;
      }
    })
  }

  trackByFn(index : any, item : any) {
     return index;
  }

}




