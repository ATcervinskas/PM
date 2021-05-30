import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {HttpClientModule} from '@angular/common/http';
import {FormsModule,FormGroup,NgForm,ReactiveFormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import {Ng2OrderModule} from 'ng2-order-pipe'
import {Ng2SearchPipeModule} from 'ng2-search-filter'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    Ng2OrderModule,
    Ng2SearchPipeModule
  ],
  exports:[NgxPaginationModule,Ng2SearchPipeModule,Ng2OrderModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
