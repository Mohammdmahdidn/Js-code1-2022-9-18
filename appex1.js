const stuf = [
  {
    name: "book",
    price: 1500,
    inventory: 3,
  },
  {
    name: "laptop",
    price: 3000,
    inventory: 5,
  },
  {
    name: "pen",
    price: 300,
    inventory: 4,
  },
  {
    name: "phone",
    price: 1000,
    inventory: 1,
  },
  {
    name: "watch",
    price: 1500,
    inventory: 7,
  },
];
console.log("items that we have more than 3 and min price of 1000:");
stuf.forEach(function (item) {
  if (item.inventory > 3) {
    if (item.price > 1000) {
      console.log(item);
    }
  }
});

const c = stuf.indexOf(stuf.find((stuf) => stuf.name === "book"));
const g = stuf.slice(c + 1, stuf.length);
console.log("showing the list of items without book item:");
console.log(g);
