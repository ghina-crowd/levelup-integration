import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../app/auth/auth.component';
import { RegisterComponent } from '../app/auth/register/register.component';
import { LoginComponent } from '../app/login/login.component';
import {TranslateModule} from '@ngx-translate/core';
import {RouterModule, Routes} from '@angular/router';
import { MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {SocialIntegrationComponent} from '../app/auth/social-integration/social-integration.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { ForgetPasswordComponent } from '../app/auth/forget-password/forget-password.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  }
];

@NgModule({
  declarations: [AuthComponent, RegisterComponent, LoginComponent, ForgetPasswordComponent,
    SocialIntegrationComponent
  ],
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
export class AuthModule { }
