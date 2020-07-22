import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Map, latLng, tileLayer, Layer, marker } from 'leaflet';
import * as L from 'leaflet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {
  map: Map;

  constructor(private https: HttpClient, private router: Router) { }

  leafletMap(data) {
    // In setView add latLng and zoom
    this.map = new Map('mapId').setView([20.5937, 78.9629], 3);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | RoboMx',
      maxNativeZoom: 18,
      maxZoom: 50
    }).addTo(this.map);

    data.forEach((d) => {
      // yellow, orange, green, red, [low, medium, high]
      const mark = d['result'] == 'yellow'? 'low':
                   d['result'] == 'green'? 'low':
                   d['result'] == 'orange'? 'medium':'high'
      const markPoint = marker([d['zip_lat'], d['zip_lon']]);
      
      var myIcon;
      
      if (mark == 'low') {
        myIcon = L.icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png',
          shadowUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png'
        });
      } else if (mark == 'medium') {
        myIcon = L.icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
          shadowUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png'
        });
      } else {
        myIcon = L.icon({
          iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
          shadowUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png'
        });
      }
      markPoint.bindPopup(mark + ' risk');
      markPoint.setIcon(myIcon)
      this.map.addLayer(markPoint)
    })    

    // add legend
    var legend = new L.Control({position: 'topright'});
    legend.onAdd = function(map) {
      
      var div = L.DomUtil.create('div', 'info legend'),
      grades = ["High", "Medium", "Low"],
      labels = [
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png",
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-gold.png"];
      
        div.innerHTML = "<h4>Risk Level</h4>"
      // loop through our density intervals and generate a label with a colored square for each interval
      for (var i = 0; i < grades.length; i++) {
          div.innerHTML +=
              " <img src="+ labels[i] + ">" +grades[i] +'<br>';
      }

      div.style.padding = '6px 8px';
      div.style.background = ' rgba(255, 255, 255, 0.8)';
      div.style.lineHeight = '24px';
      div.style.color = '#555'

      return div;
    };
    legend.addTo(this.map)
    this.map.flyTo([20.5937, 78.9629], 5);
  }

  home() {
    this.router.navigate(['/tabs']);
  }

  public AppRef = AppComponent;

  ngOnInit() {
    this.https.get(AppComponent.base + 'map.json').subscribe((res) => {
      this.leafletMap(res)
    })
  }
}
