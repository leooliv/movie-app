import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../../../shared/moviedb';
import { MovieService } from '../../../shared/services/movie.service';
import { HttpClient, HttpClientModule } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  query: string;
  movies: Observable<Movie[]>;

  constructor(private movieService: MovieService) { }

  getMovieSearch() {
    this.movies = this.movieService.getMovies(this.query)
  }

  ngOnInit(): void {
  }

}
