import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MybattleshipComponent } from './mybattleship/mybattleship.component';
import { MytargetsComponent } from './mybattleship/mytargets/mytargets.component';
import { MyshipsComponent } from './mybattleship/myships/myships.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DragItComponent } from './mybattleship/drag-it/drag-it.component';

@NgModule({
  declarations: [
    AppComponent,
    MybattleshipComponent,
    MytargetsComponent,
    MyshipsComponent,
    DragItComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
