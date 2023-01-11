const popularData = [
  {
    id: "1",
    image: require("../img/pizza1.png"),
    title: "Primvera Pizza",
    weight: "540 gr",
    rating: "5.0",
    price: "7,000",
    sizeName: "Medium",
    sizeNumber: 14,
    crust: "Thin Crust",
    deliveryTime: 30,
    ingredients: [
      {
        id: "1",
        name: "ham",
        image: require("../img/ham.png"),
      },
      {
        id: "2",
        name: "tomato",
        image: require("../img/tomato.png"),
      },
      {
        id: "3",
        name: "cheese",
        image: require("../img/cheese.png"),
      },
      {
        id: "4",
        name: "garlic",
        image: require("../img/garlic.png"),
      },
    ],
  },
  {
    id: "2",
    image: require("../img/pizza2.png"),
    title: "Vegetarian Pizza",
    weight: "450 gr",
    rating: "5.0",
    price: "5,000",
    sizeName: "Medium",
    sizeNumber: 14,
    crust: "Thick Crust",
    deliveryTime: 40,
    ingredients: [
      {
        id: "3",
        name: "cheese",
        image: require("../img/cheese.png"),
      },
      {
        id: "4",
        name: "garlic",
        image: require("../img/garlic.png"),
      },
    ],
  },
  {
    id: "3",
    image: require("../img/pizza3.png"),
    title: "Pepperoni Pizza",
    weight: "700 gr",
    rating: "5.0",
    price: "12,000",
    sizeName: "Large",
    sizeNumber: 18,
    crust: "Thin Crust",
    deliveryTime: 20,
    ingredients: [
      {
        id: "2",
        name: "tomato",
        image: require("../img/tomato.png"),
      },
      {
        id: "3",
        name: "cheese",
        image: require("../img/cheese.png"),
      },
    ],
  },
];

export default popularData;
