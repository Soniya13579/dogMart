import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from '../data-type';
import { SellerService } from '../services/seller.service';

@Component({
  selector: 'app-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent {

  constructor(private seller: SellerService, private router: Router) {

  }

  signUp(data: Signup):void {
    this.seller.getUserSignup(data).subscribe((resp) => {
      if(resp) {
        this.router.navigate(['seller-home'])
      }
    })
  }

}
