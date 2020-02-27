import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenudemoComponent } from './menudemo/menudemo.component';
import { SidenavdemoComponent } from './sidenavdemo/sidenavdemo.component';
import { ToolbardemoComponent } from './toolbardemo/toolbardemo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenudemoComponent,
    SidenavdemoComponent,
    ToolbardemoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
