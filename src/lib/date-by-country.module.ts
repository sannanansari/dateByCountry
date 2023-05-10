import { NgModule } from '@angular/core';
import { DateByCountryComponent } from './date-by-country.component';
import { DateByCountryPipe } from './date-by-country.pipe';



@NgModule({
  declarations: [
    DateByCountryComponent,
    DateByCountryPipe
  ],
  imports: [
  ],
  exports: [
    DateByCountryComponent,
    DateByCountryPipe
  ]
})
export class DateByCountryModule { }
