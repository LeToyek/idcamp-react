const img1 = require("./images/dimasmds.jpeg")
const img2 = require('./images/arifaizin.jpeg');
const img3 = require('./images/rfajri27.jpeg');
const getData = () => {
  return [
    {
      id: 1,
      name: "Dimas Saputra",
      tag: "dimasmds",
      imageUrl: img1,
    },
    {
      id: 2,
      name: "Arif Faizin",
      tag: "arifaizin",
      imageUrl: img2,
    },
    {
      id: 3,
      name: "Rahmat Fajri",
      tag: "rfajri27",
      imageUrl: img3,
    },
  ];
};

export { getData }