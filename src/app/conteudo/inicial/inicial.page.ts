import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MapaService } from '../../services/mapa.service';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage {
  constructor(private router: Router, private mapaService: MapaService) {}

  // Navegações para páginas específicas
  goToPraias() {
    this.router.navigate(['conteudo/inicial/praias']);
  }

  goToPontosTuristicos() {
    this.router.navigate(['conteudo/inicial/turisticos']);
  }

  goToCachoeiras() {
    this.router.navigate(['conteudo/inicial/cachoeiras']);
  }

  goToTrilhas() {
    this.router.navigate(['conteudo/inicial/trilhas']);
  }

  // Usando o MapaService para atualizar a localização no mapa
  updateMapLocation(lat: number, lng: number) {
    this.mapaService.updateLocation(lat, lng);  // Chama o serviço para atualizar a localização
  }
}
