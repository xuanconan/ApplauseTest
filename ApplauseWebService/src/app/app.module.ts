import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';


// Social module
import { SocialLoginModule, AuthServiceConfig } from 'angular4-social-login';
import { GoogleLoginProvider } from 'angular4-social-login';

const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('596677888081-jm3cm0csfhpht9jjm0iv4qiocojj7c3g.apps.googleusercontent.com')
  },
]);

export function provideConfig() {
  return config;
}


// import routing in appmodule.
import {routing} from './app.routing';

import { WebsiteService} from './services/website.service.client';

import { HttpModule} from '@angular/http';
import { QuillEditorModule } from 'ngx-quill-editor';
import { MatchingComponent } from './components/matching/matching.component';
import { KeysPipe } from './keys.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MatchingComponent,
    KeysPipe,
  ],
  imports: [
    BrowserModule, routing, FormsModule, HttpModule, QuillEditorModule, SocialLoginModule,    NgMultiSelectDropDownModule.forRoot()

  ],

  // inject it into any constructors
  providers: [

    WebsiteService,

    CookieService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
