import img1 from "../components/asset/image1.avif";
import img2 from "../components/asset/image2.avif";
import img3 from "../components/asset/image3.avif";
import img4 from "../components/asset/image4.avif";
import img5 from "../components/asset/image5.avif";
import img6 from "../components/asset/image6.avif";
import img7 from "../components/asset/image7.avif";
import img8 from "../components/asset/image8.avif";
import img12 from "../components/asset/image13.avif";
import img14 from "../components/asset/image14.avif";
import img15 from "../components/asset/image15.avif";
import img16 from "../components/asset/image16.avif";
import img17 from "../components/asset/image17.avif";
import img18 from "../components/asset/image18.avif";
import img19 from "../components/asset/image19.avif";
import img20 from "../components/asset/image20.avif";

export const products = [
  { id: 1, title: "Ruched bodycon dress", img: img1, hoverImg: img2, price: 1499, description: "A stunning bodycon dress with ruched detailing that flatters every figure. Perfect for a night out or special occasion." },
  { id: 2, title: "Oversized sweatshirt", img: img4, hoverImg: img3, price: 999, description: "Comfortable and stylish oversized sweatshirt made from premium cotton. Perfect for casual wear and relaxation." },
  { id: 3, title: "Flounce-trimmed blouse", img: img6, hoverImg: img5, price: 1999, description: "Elegant blouse with flounce trim details. Versatile piece that works for both office and evening wear." },
  { id: 4, title: "Fitted Blazzer", img: img8, hoverImg: img7, price: 2999, description: "Classic fitted blazer in premium fabric. A timeless piece that adds sophistication to any outfit." },
  { id: 5, title: "Loose-fit T-shirt", img: img14, hoverImg: img15, price: 1799, description: "Relaxed fit t-shirt in soft, breathable fabric. Essential wardrobe staple for everyday comfort." },
  { id: 6, title: "Loose polo T-shirt", img: img17, hoverImg: img18, price: 1899, description: "Casual polo t-shirt with a modern loose fit. Perfect for weekend outings and casual gatherings." },
  { id: 7, title: "Oversized sequined top", img: img12, hoverImg: img16, price: 1399, description: "Eye-catching sequined top that adds sparkle to any outfit. Ideal for parties and special events." },
  { id: 8, title: "Draped velour mini dress", img: img19, hoverImg: img20, price: 1399, description: "Luxurious velour mini dress with elegant draping. Makes a statement with its rich texture and style." },
];

export const formatPrice = (price) => {
  return `₹${price.toLocaleString('en-IN')}`;
};

export const getProductById = (id) => {
  return products.find((p) => p.id === parseInt(id));
};