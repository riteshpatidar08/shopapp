import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_products = [
  {
    id: 1,
    name: "Floral Print Wrap Blouse",
    category: "women",
    color: "Red",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
    discount: "-38%",
    rating: 3.0
  },
  {
    id: 2,
    name: "Polka Dot Ruffle Top",
    category: "women",
    color: "Blue",
    image: p2_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 4.0
  },
  {
    id: 3,
    name: "Lace Trim Peasant Blouse",
    category: "women",
    color: "White",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
    discount: "-40%",
    rating: 2.4
  },
  {
    id: 4,
    name: "Boho Embroidered Blouse",
    category: "women",
    color: "Green",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
    discount: "-33%",
    rating: 3.0
  },
  {
    id: 5,
    name: "Striped Button-Down Shirt",
    category: "women",
    color: "Yellow",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 4.0
  },
  {
    id: 6,
    name: "Vintage Bow Tie Blouse",
    category: "women",
    color: "Pink",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 2.4
  },
  {
    id: 7,
    name: "Plaid Puff Sleeve Top",
    category: "women",
    color: "Purple",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 3.0
  },
  {
    id: 8,
    name: "Chambray Shirt",
    category: "women",
    color: "Light Blue",
    image: p8_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 4.0
  },
  {
    id: 9,
    name: "Animal Print V-Neck Top",
    category: "women",
    color: "Leopard",
    image: p9_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 2.4
  },
  {
    id: 10,
    name: "Solid Color Crewneck Tee",
    category: "women",
    color: "Black",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 3.0
  },
  {
    id: 11,
    name: "Off Shoulder Top",
    category: "women",
    color: "Coral",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 4.0
  },
  {
    id: 12,
    name: "Peplum Top",
    category: "women",
    color: "Teal",
    image: p12_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 2.4
  },
  {
    id: 13,
    name: "Men's Casual Henley Shirt",
    category: "men",
    color: "Gray",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 3.0
  },
  {
    id: 14,
    name: "Men's Plaid Flannel Shirt",
    category: "men",
    color: "Red",
    image: p14_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 4.0
  },
  {
    id: 15,
    name: "Men's Denim Shirt",
    category: "men",
    color: "Blue",
    image: p15_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 2.4
  },
  {
    id: 16,
    name: "Men's Oxford Shirt",
    category: "men",
    color: "White",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 3.0
  },
  {
    id: 17,
    name: "Men's Polo Shirt",
    category: "men",
    color: "Green",
    image: p17_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 4.0
  },
  {
    id: 18,
    name: "Men's V-Neck Sweater",
    category: "men",
    color: "Navy",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 2.4
  },
  {
    id: 19,
    name: "Men's Graphic Tee",
    category: "men",
    color: "Black",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 3.0
  },
  {
    id: 20,
    name: "Men's Hooded Sweatshirt",
    category: "men",
    color: "Gray",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 4.0
  },
  {
    id: 21,
    name: "Men's Long Sleeve Tee",
    category: "men",
    color: "Olive",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 2.4
  },
  {
    id: 22,
    name: "Men's Quilted Jacket",
    category: "men",
    color: "Brown",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 3.0
  },
  {
    id: 23,
    name: "Men's Pullover Hoodie",
    category: "men",
    color: "Maroon",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 4.0
  },
  {
    id: 24,
    name: "Men's Zip-Up Hoodie",
    category: "men",
    color: "Black",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 2.4
  },
  {
    id: 25,
    name: "Boy's Striped T-Shirt",
    category: "kid",
    color: "Blue",
    image: p25_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 3.0
  },
  {
    id: 26,
    name: "Boy's Graphic Hoodie",
    category: "kid",
    color: "Red",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 4.0
  },
  {
    id: 27,
    name: "Boy's Denim Jacket",
    category: "kid",
    color: "Blue",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 2.4
  },
  {
    id: 28,
    name: "Boy's Cargo Pants",
    category: "kid",
    color: "Green",
    image: p28_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 3.0
  },
  {
    id: 29,
    name: "Boy's Polo Shirt",
    category: "kid",
    color: "White",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 4.0
  },
  {
    id: 30,
    name: "Boy's Sweatpants",
    category: "kid",
    color: "Gray",
    image: p30_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 2.4
  },
  {
    id: 31,
    name: "Boy's Long Sleeve Tee",
    category: "kid",
    color: "Navy",
    image: p31_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 3.0
  },
  {
    id: 32,
    name: "Boy's Winter Jacket",
    category: "kid",
    color: "Black",
    image: p32_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 4.0
  },
  {
    id: 33,
    name: "Boy's Hoodie",
    category: "kid",
    color: "Olive",
    image: p33_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 2.4
  },
  {
    id: 34,
    name: "Boy's Chinos",
    category: "kid",
    color: "Khaki",
    image: p34_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 3.0
  },
  {
    id: 35,
    name: "Boy's Bomber Jacket",
    category: "kid",
    color: "Green",
    image: p35_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 4.0
  },
  {
    id: 36,
    name: "Boy's Rain Jacket",
    category: "kid",
    color: "Yellow",
    image: p36_img,
    new_price: 85.0,
    old_price: 120.5,
    discount: "-29%",
    rating: 2.4
  },
];
export default all_products;
