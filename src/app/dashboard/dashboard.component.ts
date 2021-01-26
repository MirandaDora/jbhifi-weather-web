import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { environment } from '../../environments/environment';
import { WeatherService } from '../core/services'
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@UntilDestroy()
@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  apiKeys = [];
  weatherQueryForm = new FormGroup({
    city: new FormControl(''),
    country: new FormControl(''),
    apiKey: new FormControl('')
  })
  weatherQueryRes = {
    weather: [{main: String}],
    sys: {country: String},
    main: {
      temp: Number,
      feels_like: Number,
      temp_min: Number,
      temp_max: Number
    },
    name: String
  };
  isLoaded = false;
  constructor(
    private toastrService: ToastrService,
    private weatherService: WeatherService
  ) {
  }

  ngOnInit(): void {
    this.apiKeys = this.weatherService.getApiKeys();
  }
  ngOnDestroy(): void {

  }
  onSubmitRequest(): void {
    const {city, country, apiKey} = this.weatherQueryForm.value
    this.weatherService.getWeatherByCityCountry(city, country, apiKey)
    .subscribe(res => {
      this.weatherQueryRes = res;
      this.isLoaded;
    },
    error => {
      switch (error.status) {
        case 400:
          this.toastrService.error('Please double check that you have properly filled all the required fields', 'Failed');
          break;
        case 403:
          this.toastrService.error('Api Key is exceeding the quota', 'Failed');
          break;
        default:
          this.toastrService.error('The service is temporarily unavailable, please try again later.', 'Failed');
          break;
      }
    }
    )
  }
}
