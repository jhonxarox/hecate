import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})
export class ListCardComponent implements OnInit {

  products = [
    { img: "../../assets/product.jpg", price: 10000, quantity: 100, name: "Produk A" },
    { img: "../../assets/product.jpg", price: 15000, quantity: 90, name: "Produk B" },
    { img: "../../assets/product.jpg", price: 12000, quantity: 70, name: "Produk C" },
    { img: "../../assets/product.jpg", price: 11000, quantity: 80, name: "Produk D" },
    { img: "../../assets/product.jpg", price: 9000, quantity: 60, name: "Produk E" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
