import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from './../app.component';
import { BrowserService } from './../browser.service';

@Component({
  selector: 'app-helpline',
  templateUrl: './helpline.page.html',
  styleUrls: ['./helpline.page.scss'],
})
export class HelplinePage implements OnInit {
helpline = [];
help_search = [];
show = true;

constructor(
    private router: Router,
    private http: HttpClient,
    private browser: BrowserService
  ) { }

  ngOnInit() {
    this.fetchData();
  }
  
  info() {
    this.router.navigate(['/tabs/info'])
  }

  fetchData() {
    this.http.get(AppComponent.base + 'helpline.json').subscribe((res) => {
      this.helpline = Object.values(res);
      this.help_search = this.helpline;
      this.show = false;
    }, (error) => {
      this.show = false;
    });
  }

  runTimeChange(event){
    let search = event.target.value;
    this.help_search = []
    for (let x of this.helpline) {
      if(x.state.toLowerCase().startsWith(search.toLowerCase())){
        this.help_search.push(x)
      }
    }
  }


}
