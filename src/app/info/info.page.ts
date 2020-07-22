import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  card_details = [{
    "image": "../../assets/icon/myths.png",
    "color": "#d9e1da",
    "route": '/myths'
  },{
    "image": "../../assets/icon/awareness.png",
    "color": "#d9e1da",
    "route": '/awareness'
  },
  {
    "image": "../../assets/icon/hour.png",
    "color": "#d9e1da",
    "route": "/helpline"
  },
  {
    "image": "../../assets/icon/resources.png",
    "color": "#d9e1da",
    "route": '/resources'
  }]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  mythPageRoute(route) {
    this.router.navigate([route]);
  }

}
