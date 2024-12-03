import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  searchQuery: string = '';
  center: google.maps.LatLngLiteral = { lat: -23.55052, lng: -46.633308 }; // Ponto inicial (São Paulo)
  zoom: number = 12;

  constructor(private http: HttpClient) {}

  searchLocation() {
    if (!this.searchQuery) {
      alert('Por favor, insira um local para busca.');
      return;
    }

    const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      this.searchQuery
    )}&key=AIzaSyBpVwYGVPoONdvOIQRgh1euoJbyG5gEhWM`;

    this.http.get(geocodeUrl).subscribe((response: any) => {
      if (response.status === 'OK' && response.results.length > 0) {
        const location = response.results[0].geometry.location;
        this.center = { lat: location.lat, lng: location.lng };
        this.zoom = 14;
      } else {
        alert('Local não encontrado. Tente novamente.');
      }
    });
  }
}
