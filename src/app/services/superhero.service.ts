import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { CharacterDataWrapper, Character, ComicDataContainer } from '../models/generalmodel';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SuperheroService {

  constructor() { }

  async getSuperheroes() {
    const options = {
      url: `https://gateway.marvel.com:443/v1/public/characters?apikey=${environment.apikey}`
    }
    var response = await CapacitorHttp.get(options);
    return response.data.data.results as Character[];
  }

}
