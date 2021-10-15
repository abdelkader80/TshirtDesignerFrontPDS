import { categorie } from "./categorie";

export class Produit{
    id:number;
    name:string;
    taille:string;
    couleur:string;
    description:string;
    currentprice:number;
    promotion:boolean;
    selected:boolean;
    disponible:boolean;
    quantite:number;
    photoNom:string;
    categorie:categorie
       
    

}