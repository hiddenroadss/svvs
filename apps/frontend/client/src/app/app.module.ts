import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, MatButtonModule, MatCardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
