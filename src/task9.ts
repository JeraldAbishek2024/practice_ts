type Product = {
  id: number;
  name: string;
  desc: string;
  price: number;
};

const inventory: Product[] = [
  { id: 1, name: "Delta Watch", desc: "Wrist watch", price: 2000 },
  { id: 2, name: "Delta Phone", desc: "Smart phone", price: 100000 },
  { id: 3, name: "Delta Tablet", desc: "Smart Tablet", price: 150000 },
];

function printInventory(products: Product[]) {
  products.forEach((p) =>
    console.log(
      `Product Name : ${p.name}\nProduct Details : ${p.desc}\nPrice : Rs.${p.price}/-\n`
    )
  );
}

console.log("Product Details:");
printInventory(inventory);
