import {ProductItem}from './productitem.model'
import {Client} from './client.model';
export class Panier{
  public name:string;
  public items: Map <number,ProductItem>=new Map();
  public client :Client;
  constructor(name:string) {
    this.name=name;
  }
}
