import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import {MainComponent} from "./main/main.component";
import {HomeComponent} from "./main/home/home.component";
import {OnboardingComponent} from "./main/onboarding/onboarding.component";
import {SettingsComponent} from "./main/settings/settings.component";
import {SettingsLanguageComponent} from "./main/settings/settings-language/settings-language.component";
import {BreadcrumbsComponent} from "./main/components/breadcrumbs/breadcrumbs.component";
import {LoaderComponent} from "./shared/loader/loader.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    OnboardingComponent,
    SettingsComponent,
    SettingsLanguageComponent,
    BreadcrumbsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TranslocoRootModule,
        LoaderComponent,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
