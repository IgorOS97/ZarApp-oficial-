import { Component, AfterViewInit } from '@angular/core';
import { MapaService } from '../../services/mapa.service';  // Caminho correto para importar o serviço

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements AfterViewInit {
  map: google.maps.Map | undefined;
  marker: google.maps.Marker | undefined;

  constructor(private mapaService: MapaService) {}

  ngAfterViewInit() {
    this.initMap();
    this.mapaService.updateLocation(-23.55052, -46.633308);  // Exemplo de atualização
  }

  initMap() {
    const initialLocation = { lat: -23.55052, lng: -46.633308 }; // São Paulo

    // Inicializa o mapa
    this.map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: initialLocation,
      zoom: 12,
    });

    // Adiciona o marcador inicial
    this.marker = new google.maps.Marker({
      position: initialLocation,
      map: this.map,
      title: 'São Paulo',
    });
  }

  updateLocation(lat: number, lng: number) {
    if (this.map) {
      const newLocation = { lat, lng };

      // Atualiza o centro do mapa
      this.map.setCenter(newLocation);

      if (this.marker) {
        this.marker.setPosition(newLocation);
      } else {
        this.marker = new google.maps.Marker({
          position: newLocation,
          map: this.map,
        });
      }

      this.marker.setTitle(`Lat: ${lat}, Lng: ${lng}`);
    }
  }
}
