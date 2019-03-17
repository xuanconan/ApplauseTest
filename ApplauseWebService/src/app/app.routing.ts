import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {MatchingComponent} from './components/matching/matching.component';

// config route default constants
const appRoutes: Routes = [
  // {path: '', component : HomeComponent},
  {path: '', component : MatchingComponent},

];

// use appRoutes to config router module and export it as an constant variable that
// that can be imported else where
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
