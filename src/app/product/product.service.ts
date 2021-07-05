import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators"
import { productInterface } from "./product";

//here injectable allows this class to be injectable by angular interjector to any component
@Injectable({
    providedIn:'root'
})


export class ProductService{
    private _productUrl='api/products/products.json';
    constructor(private http:HttpClient){}
    getService():Observable<productInterface[]>{
        return this.http.get<productInterface[]>(this._productUrl).pipe(
            tap(data =>console.log("All", JSON.stringify(data))),
            catchError(this.errorMethod)
        );

    }
    private errorMethod(err:HttpErrorResponse)
    {
        //in a real world app, we may send the server to some remote logging infrastructure
        //instead of just logging it to the console
        let errorMessage="";
        if(err.error instanceof ErrorEvent)
        {
        //A client-side or network error occured, handle it accordingly
        errorMessage=`An error occured ${err.error.message}`;
        }
        else{
        //The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong
        errorMessage= `Server returned code: ${err.status}, error message is ${err.message}`;
        
        

        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}