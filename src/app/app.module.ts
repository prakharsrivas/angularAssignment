import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropDownListComponent } from './drop-down-list/drop-down-list.component';
import { DisplayTableComponent } from './display-table/display-table.component';



@NgModule({
  declarations: [
    AppComponent,
    DropDownListComponent,
    DisplayTableComponent
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
