import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../../../shared/models/movie.model';
import { MovieService } from '../../../shared/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public movies: Movies[];
  public searchForm: FormGroup = this.formBuilder.group({
    searchQuery: [''],
  });

  constructor(
    private formBuilder: FormBuilder,
    private movieService: MovieService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  public submit(): void {
    const form = this.searchForm.getRawValue();
    this.movieService.search(form.searchQuery).subscribe((res: any) => {
      console.log(res);
      this.movies = res.results;
    });
  }

  public callServer() {
    const headers = new HttpHeaders()
      .set('Authorization', '1fed561f5b72b72e04f206943ef3eb2a')
      .set('Content-Type', 'application/json');

    this.http
      .post('http://localhost:3000/ping', JSON.stringify(this.movies), {
        headers: headers,
      })
      .subscribe((data) => {
        console.log('calling server');
        console.log(data);
      });
  }
}
