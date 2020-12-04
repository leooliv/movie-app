import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    private movieService: MovieService
  ) {}

  ngOnInit(): void {}

  public submit(): void {
    const form = this.searchForm.getRawValue();
    this.movieService.search(form.searchQuery).subscribe((res: any) => {
      console.log(res);
      this.movies = res.results
    });
  }
}
