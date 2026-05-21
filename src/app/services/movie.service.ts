import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { CONFIG } from '../config'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(
    private http: HttpClient
  ) {}

  searchMovies(text: string) {

    return this.http.get(
      `${CONFIG.API_URL}/movies?search=${text}`
    )

  }

}