export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  seqNum: number;
}

export function compareProducts(p1: Product, p2: Product) {

  const compare = p1.seqNum - p2.seqNum;

  if (compare > 0){
    return 1;
  } else if (compare < 0){
    return -1;
  }
  else return 0;

}
