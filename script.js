const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "shoyu.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "miso.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "tonkotsu.jpg",
  },
];

//create a div.container
console.log(document.body);
let div = document.createElement("div");
document.body.append(div);
div.setAttribute("id", "container");

//create image container
let imageDiv = document.createElement("div");
imageDiv.setAttribute("id", "image_container");

//set imageDiv to be child of container
div.appendChild(imageDiv);

// add images to the div
// ramens.forEach()
for (const ramen of ramens) {
  const img = document.createElement("img");
  imageDiv.appendChild(img);
  img.src = `./items/images/${ramen.image}`;
  // console.log(`./items/images/${ramen.image}`);
  // image width height
  img.style.width = "150px";
  img.style.height = "150px";
}
