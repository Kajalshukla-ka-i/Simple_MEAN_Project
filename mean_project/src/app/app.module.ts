import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { StaticpagesModule } from './staticpages/staticpages.module';
import { ArticlesModule } from './articles/articles.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccountModule } from './account/account.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountserviceService } from './account/accountservice.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    ArticlesModule,
    StaticpagesModule,
    ReactiveFormsModule,
    AccountModule,
    AppRoutingModule,
    // ArticlesModule,
    // StaticpagesModule
  ],
  providers: [AccountserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
