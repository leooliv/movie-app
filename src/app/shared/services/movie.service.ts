import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie, MovieDetail } from '../moviedb';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly API_KEY = '1fed561f5b72b72e04f206943ef3eb2a';
  private readonly BASE_URL = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  public search(searchQuery: string): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(
        `${this.BASE_URL}/search/movie?api_key=${this.API_KEY}&language=en-US&page=1&query=${searchQuery}`
      );
  }

  public getMovieDetails(Id: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(
      `${this.BASE_URL}/movie/${Id}?apikey=${this.API_KEY}`
    );
  }
}
