import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, MovieDetail } from '../moviedb';


@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly API_KEY = '1fed561f5b72b72e04f206943ef3eb2a';

  constructor(private http: HttpClient) {}

  public getMovies(searchQuery: string): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(
        `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}language=en-US&page=1&query=${searchQuery}`
      )
      .pipe(map((response: any) => response.Search));
  }
  getMovieDetails(Id: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(`https://api.themoviedb.org/3/movie/${Id}?apikey=${this.API_KEY}`);
  }
}
