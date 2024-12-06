import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  // Isso garante que o serviço será provido no nível global
})
export class MapaService {
  constructor() {}

  updateLocation(lat: number, lng: number) {
    // lógica de atualização de localização
  }
}
