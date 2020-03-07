import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MybattleshipComponent } from './mybattleship/mybattleship.component';
import { MytargetsComponent } from './mybattleship/mytargets/mytargets.component';
import { MyshipsComponent } from './mybattleship/myships/myships.component';

@NgModule({
  declarations: [
    AppComponent,
    MybattleshipComponent,
    MytargetsComponent,
    MyshipsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
