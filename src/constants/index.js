import { images, videos } from "../utils";

const flavourList = [
  {
    name: "Chocolate Milk",
    color: "brown",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Stawberry Milk",
    color: "red",
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "Cookies & Cream",
    color: "blue",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Peanut Butter Chocolate",
    color: "orange",
    rotation: "md:rotate-[8deg] rotate-0",
  },
  {
    name: "Vanilla Milkshake",
    color: "white",
    rotation: "md:rotate-[-8deg] rotate-0",
  },
  {
    name: "Max Chocolate Milk",
    color: "black",
    rotation: "md:rotate-[8deg] rotate-0",
  },
];

const infoLists = [
  { label: "Potassium", amount: "245mg" },
  { label: "Calcium", amount: "500mg" },
  { label: "Vitamin A", amount: "176mcg" },
  { label: "Vitamin D", amount: "5mcg" },
  { label: "Iron", amount: "1mg" },
];

const testimonialCards = [
  {
    src: videos.vt1,
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    img: images.p1,
    translation: "translate-y-[-5%]",
  },
  {
    src: videos.vt2,
    rotation: "rotate-z-[4deg]",
    name: "Alexander",
    img: images.p2,
    // translation: "translate-y-[-5%]",
  },
  {
    src: videos.vt3,
    rotation: "rotate-z-[-4deg]",
    name: "Andrew",
    img: images.p3,
    translation: "translate-y-[-5%]",
  },
  {
    src: videos.vt4,
    rotation: "rotate-z-[4deg]",
    name: "Bryan",
    img: images.p4,
    translation: "translate-y-[5%]",
  },
  {
    src: videos.vt5,
    rotation: "rotate-z-[-10deg]",
    name: "Chris",
    img: images.p5,
    // translation: "translate-y-[-5%]",
  },
  {
    src: videos.vt6,
    rotation: "rotate-z-[4deg]",
    name: "Devante",
    img: images.p6,
    translation: "translate-y-[5%]",
  },
  {
    src: videos.vt7,
    rotation: "rotate-z-[-3deg]",
    name: "Melisa",
    img: images.p7,
    translation: "translate-y-[10%]",
  },
];

export { flavourList, infoLists, testimonialCards };
