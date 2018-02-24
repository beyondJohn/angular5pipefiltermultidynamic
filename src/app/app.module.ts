import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FiltermultiPipe } from './pipes/filtermulti.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FiltermultiPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
