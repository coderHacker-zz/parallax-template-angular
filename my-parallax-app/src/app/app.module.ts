import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CapCompComponent } from './cap-comp/cap-comp.component';
import { DescCompComponent } from './desc-comp/desc-comp.component';
import { GridCompComponent } from './grid-comp/grid-comp.component';


@NgModule({
  declarations: [
    AppComponent,
    CapCompComponent,
    DescCompComponent,
    GridCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
