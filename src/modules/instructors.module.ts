import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorsComponent } from '../app/instructors/instructors.component';
import {RouterModule, Routes} from "@angular/router";
import {CarouselModule} from "../components/carousel/carousel.module";
import {HttpClientModule} from "@angular/common/http";
import {TranslateModule} from "@ngx-translate/core";

const routes: Routes = [
  {
    path: '', component: InstructorsComponent,
  }
];


@NgModule({
  declarations: [InstructorsComponent],
  imports: [
    CommonModule,
    CarouselModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    TranslateModule,
  ]
})
export class InstructorsModule { }
