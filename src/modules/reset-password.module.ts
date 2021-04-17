import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ResetPasswordComponent} from "../app/reset-password/reset-password.component";
import {TranslateModule} from "@ngx-translate/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatTabsModule} from "@angular/material/tabs";
import {MatOptionModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";


const routes: Routes = [
  {
    path: '',
    component: ResetPasswordComponent,
  }
];


@NgModule({
  declarations: [ResetPasswordComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    TranslateModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatOptionModule,
    MatSelectModule,


  ]
})
export class ResetPasswordModule { }
