import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productInterface } from './product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  message:number=0;
  product:productInterface | undefined;
  pageTitle:string='Product Detail';
  constructor(private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.message=Number(this.route.snapshot.paramMap.get('id'));
    this.pageTitle=`product Id: ${this.message}`; 
  }

  onBack():void{
    this.router.navigate(['/products']);
  }

}
