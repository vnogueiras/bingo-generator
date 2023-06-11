import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BingoComponent } from './component/bingo/bingo.component';
import { UkModelComponent } from './component/bingo/uk-model/uk-model.component';

@NgModule({
  declarations: [
    AppComponent,
    BingoComponent,
    UkModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
