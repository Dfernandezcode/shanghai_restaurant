import chickenSatayImage from "../assets/images/poultry/chicken-satay.jpg";
import chickenLemonImage from "../assets/images/poultry/chicken-lemon.jpg";
const menuPoultry = [
  {
    id: 21,
    name: "Satay Chicken Skewers",
    description: "Indulge in our renowned Glazed Satay Chicken Skewers, a favourite among patrons. Each skewer is a melody of flavors, featuring tender chicken marinated in a unique blend of spices and grilled to golden perfection.",
    allergens: ["Poultry", "Peanuts"],
    price: 50000,
    photo: chickenSatayImage,
  },
  {
    id: 22,
    name: "Lemon Chicken",
    description: "Dive into the flavors of our Chinese Lemon Chicken, a blend of crispy, golden chicken and a zesty, sweet lemon sauce. Each bite promises a burst of tangy warmth, showcasing the harmony of authentic Chinese culinary artistry.",
    allergens: ["Poultry", "Lemon"],
    price: 40000,
    photo: chickenLemonImage,
  },
];

export default menuPoultry;
