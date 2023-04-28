import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ShareModule } from './shared/share.module';
import { GifsModule } from './gifs/gifs.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ShareModule,
    GifsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
