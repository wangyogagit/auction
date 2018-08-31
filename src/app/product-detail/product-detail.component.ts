import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product, ProductService ,Comment} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  // productTitle: string;                // 定义变量保存外部传递进来的Title
  product: Product;
  comments: Comment[];

  constructor(private routeInfo: ActivatedRoute ,
              private produceService: ProductService
  ) {             // ActivatedRoute保存当前路由信息 才能接收路由传递进来的参数

  }

  ngOnInit() {

    const productId: number = this.routeInfo.snapshot.params['productId'];

    this.product = this.produceService.getProduct(productId);

    // this.productTitle = this.routeInfo.snapshot.params['prodTitle'];
    // product component通过URL中的['/product','product.title']把商品名传给
    // app.module中的'product/:prodTitle'路由，
    // 路由再把商品名传给productDetail component的prodTitle

    this.comments = this.produceService.getCommentsForProductID(productId);
  }

}
