import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CarouselModule} from '../components/carousel/carousel.module';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import { PricingComponent } from '../app/pricing/pricing.component';


const routes: Routes = [
  {
    path: '', component: PricingComponent,
  }
];


@NgModule({
  declarations: [
    PricingComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    TranslateModule,
  ]
})
export class PricingModule { }
