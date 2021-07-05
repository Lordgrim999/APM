import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { productInterface } from "./product";
import { ProductService } from "./product.service";

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit,OnDestroy{
    pageTitle: String = 'Product List';
    imageWidth: number = 50;
    imageMargin: number =2;
    showImage: boolean =false;
    private _listFilter: string ='';
    errorMessage: string ='';
    sub!:Subscription;

    get listFilter():string{
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
       // console.log(this.filterProducts(value));
        this.filteredProducts= this.filterProducts(value);
       // console.log(this.filterProducts);

    }
    constructor(private productService:ProductService){}
    
    filteredProducts: productInterface[]=[];
    
    products: productInterface[] = [];
    toggleButton(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit():void{
        //here we are subscribing the observable the curly braces inside the subscribe method is known as observer object
        //observer object has mainly three event next on success next observable property and error when an error occurs
        // and then complete
        this.sub=this.productService.getService().subscribe({
            next:products=>{this.products=products;
                this.filteredProducts=this.products;},
            error: err=> this.errorMessage=err
        });
        //this.filteredProducts=this.products;
        //here we need reassign filter product since product is being assigned in async function
        //we need to assign the filteredProducts in async function 
        
    }

    filterProducts(listFilter:string):productInterface[] {
        listFilter=listFilter.toLocaleLowerCase();
        return this.products.filter((product:productInterface)=>
            product.productName.toLocaleLowerCase().includes(listFilter));
    }
    onRatingClicked(message:string):void{
        this.pageTitle='Product List: '+message;
    }
    ngOnDestroy():void{
        this.sub.unsubscribe();
    }
}