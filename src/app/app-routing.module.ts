import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('../modules/homepage.module').then(m => m.HomepageModule),
    data: {
      title: '_Home'
    }
  },
  {
    path: 'details/:id',
    loadChildren: () => import('../modules/details.module').then(m => m.DetailsModule),
    data: {
      title: '_Details'
    }
  },
  {
    path: 'events',
    loadChildren: () => import('../modules/events.module').then(m => m.EventsModule),
    data: {
      title: '_Events'
    }
  },
  {
    path: 'terms',
    loadChildren: () => import('../modules/terms.module').then(m => m.TermsModule),
    data: {
      title: 'Terms'
    }
  },
  {
    path: 'schedule',
    loadChildren: () => import('../modules/booking.module').then(m => m.BookingModule),
    data: {
      title: 'Schedule'
    }
  },
  {
    path: 'pricing',
    loadChildren: () => import('../modules/pricing.module').then(m => m.PricingModule),
    data: {
      title: 'Pricing'
    }
  },

  {
    path: 'instructors',
    loadChildren: () => import('../modules/instructors.module').then(m => m.InstructorsModule),
    data: {
      title: 'Instructors'
    }
  },
  {
    path: 'about',
    loadChildren: () => import('../modules/about.module').then(m => m.AboutModule),
    data: {
      title: '_AboutUs'
    }
  },

  {
    path: 'contact',
    loadChildren: () => import('../modules/contact.module').then(m => m.ContactModule),
    data: {
      title: '_ContactUs'
    }
  },
  {
    path: 'account',
    loadChildren: () => import('../modules/account.module').then(m => m.AccountModule),
    data: {
      title: '_MyAccount'
    }
  },
  {
    path: 'login',
    loadChildren: () => import('../modules/auth.module').then(m => m.AuthModule),
    data: {
      title: '_Login'
    },
    // canActivate: [AuthGuard],

  },

  {
    path: 'reset-password',
    loadChildren: () => import('../modules/reset-password.module').then(m => m.ResetPasswordModule),
    data: {
      title: '_Reset'
    },
    // canActivate: [AuthGuard],

  },
  {
    path: '',
    loadChildren: () => import('../modules/homepage.module').then(m => m.HomepageModule),
    data: {
      title: '_Home'
    },
    pathMatch: 'full'
  },
  {
    path: 'page-404',
    loadChildren: () => import('../modules/page-not-found.module').then(m => m.PageNotFoundModule),
    data: {
      title: '_Home'
    },
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'page-404',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'disabled',
    relativeLinkResolution: 'corrected',
    preloadingStrategy: PreloadAllModules,
    initialNavigation: 'enabled',
    enableTracing: false, useHash: false

  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
