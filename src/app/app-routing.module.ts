import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {HomeComponent} from "./main/home/home.component";
import {SettingsComponent} from "./main/settings/settings.component";
import {OnboardingComponent} from "./main/onboarding/onboarding.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'settings',
    component: SettingsComponent,
    data: { title: 'Settings' }
  },
  { path: 'onboarding',
    component: OnboardingComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
