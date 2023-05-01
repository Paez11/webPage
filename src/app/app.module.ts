import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Ngx-translate
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

//Animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components routing
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { FooterComponent } from './components/footer/footer.component';
import { DownloadComponent } from './pages/download/download.component';
import { FixedNavbarDirective } from './directives/fixed-navbar.directive';

//Angular-material
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent,
    NavbarComponent,
    BlogComponent,
    AboutComponent,
    Error404Component,
    FooterComponent,
    FixedNavbarDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,

    MatToolbarModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatIconModule,

    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
    }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
