import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuItem } from './models/menu-item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title:string = 'Chirpus Pizza';
menuitems:MenuItem[] = [
  
  {name:"Pepperoni Pizza",
   category: "Pizza",
   price: 21.99,
   vegetarian: false,
   soldOut:true 
  },
  {name:"Margherita Pizza",
   category: "Pizza",
   price: 18.99,
   vegetarian: true,
   soldOut:false 
  },
  {name:"Tiramisu",
   category: "Dessert",
   price: 6.99,
   vegetarian: false,
   soldOut:false 
  },
  {name:"Soft Drink 16oz",
   category: "Drink",
   price: 2.99,
   vegetarian: false,
   soldOut:false 
  },
  {name:"Caesar Salad",
   category: "Salad",
   price: 18.99,
   vegetarian: true,
   soldOut:false 
  }

];


}
