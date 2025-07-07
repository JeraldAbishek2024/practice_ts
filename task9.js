var inventory = [
    { id: 1, name: "Delta Watch", desc: "Wrist watch", price: 2000 },
    { id: 2, name: "Delta Phone", desc: "Smart phone", price: 100000 },
    { id: 3, name: "Delta Tablet", desc: "Smart Tablet", price: 150000 },
];
function printInventory(products) {
    products.forEach(function (p) {
        return console.log("Product Name : ".concat(p.name, "\nProduct Details : ").concat(p.desc, "\nPrice : Rs.").concat(p.price, "/-\n"));
    });
}
console.log("Product Details:");
printInventory(inventory);
