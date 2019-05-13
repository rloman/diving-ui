import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuitListComponent } from './components/suit-list/suit-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SuitShowComponent } from './components/suit-show/suit-show.component';

@NgModule({
  declarations: [
    AppComponent,
    SuitListComponent,
    SuitShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
