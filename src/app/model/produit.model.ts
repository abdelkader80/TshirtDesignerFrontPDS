export interface Produit{
  id:number,
  name:string,
  taille:string,
  couleur:string,
  currentprice:string,
  promotion: boolean,
  selected: boolean,
  disponible: boolean,
  avecimage: boolean,
  avectext: boolean,
  photoNom: string,
  quantite: number,
  description:string,
  _links: {
    self: {
      href: string
    },
    produit: {
      href: string
    },
    categorie: {
      href: string
    }
  }
}

