export const productDetails = {
  _id: 1,
  category: "New Arrival",
  name: "Slim Fit Jeans",
  price: 49.99,
  originalPrice: 59.99,
  inStock: true,
  initialStock: 60,
  availableStock: 30,
  totalSold: 30,
  image: "/images/products/01.png",
  rating: 4.9,
  totalReviews: 800,
  tags: ["sale", "new", "save 10%"],
  description: "Comfortable and stylish slim fit jeans for everyday wear.",
  variants: [
    {
      color: "#aa5f26",
      image: "/images/products/01.png",
      initialStock: 20,
      availableStock: 10,
      totalSold: 10,
      images: [
        {
          _id: "001",
          url: "/images/products/01.png",
        },
        {
          _id: "002",
          url: "/images/products/01.png",
        },
        {
          _id: "003",
          url: "/images/products/01.png",
        },
      ],
    },
    {
      color: "#c0b0a2",
      image: "/images/products/02.png",
      initialStock: 20,
      availableStock: 10,
      totalSold: 10,
      images: [
        {
          _id: "001",
          url: "/images/products/02.png",
        },
        {
          _id: "002",
          url: "/images/products/02.png",
        },
        {
          _id: "003",
          url: "/images/products/02.png",
        },
      ],
    },
    {
      color: "#7193ae",
      image: "/images/products/03.png",
      initialStock: 20,
      availableStock: 10,
      totalSold: 10,
      images: [
        {
          _id: "001",
          url: "/images/products/03.png",
        },
        {
          _id: "002",
          url: "/images/products/03.png",
        },
        {
          _id: "003",
          url: "/images/products/03.png",
        },
      ],
    },
  ],
};
