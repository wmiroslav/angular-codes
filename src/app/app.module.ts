import { ModalModule } from './modal/modal.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing';
import { HeaderComponent } from './layout/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { DropdownContentDirective } from './dropdown-content.directive';
import { DropdownDirective } from './dropdown.directive';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownContentDirective,
    DropdownDirective,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
