import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MylibModule } from './../../projects/mylib/src/lib/mylib.module';
import { AutocompleteService } from './autocomplete.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MylibModule,HttpClientModule
  ],
  providers: [ AutocompleteService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
