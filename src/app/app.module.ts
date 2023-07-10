import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustPipePipe } from './cust-pipe.pipe';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SellerComponent } from './seller/seller.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CustPipePipe,
    HeaderComponent,
    HomeComponent,
    SellerComponent,
    SellerHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CustPipePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
