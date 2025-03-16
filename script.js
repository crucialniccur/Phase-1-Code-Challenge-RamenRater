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
//styles to the image container
imageDiv.style.border = "2px solid";
imageDiv.style.display = "flex";
imageDiv.style.gap = "1rem";
imageDiv.style.flexWrap = "wrap";
imageDiv.style.justifyContent = "space-evenly";

// create the #ramen-menu div
let ramenMenu = document.createElement("div");
ramenMenu.setAttribute("id", "ramen-menu");

// add images to the div
// ramens.forEach()
for (const ramen of ramens) {
  const img = document.createElement("img");
  // imageDiv.appendChild(img);
  img.src = `./items/images/${ramen.image}`;
  // console.log(`./items/images/${ramen.image}`);
  // image width height
  img.style.width = "150px";
  img.style.height = "150px";
  img.alt = ramen.name;

  // event listener
  img.addEventListener("click", () => {
    displayRamen(ramen);
  });

  imageDiv.appendChild(img);
  // let details = document.createElement("p");
  // imageDiv.appendChild(details);
  // details.textContent = "am here";
  //
}

function displayRamen(ramen) {
  // ramenMenu.appendChild(ramen);
  const ramenMenu = document.getElementById("ramen-menu");
  ramenMenu.innerHTML = `<img src="./items/images/${ramen.image}" alt="${ramen.name}" style="width: 400px;">`;
}

// append ramenMenu to div
div.appendChild(ramenMenu);

// add a form
let form = document.createElement("form");
div.appendChild(form);
form.setAttribute("id", "form");
//name
const nameLabel = document.createElement("label");
nameLabel.textContent = "Name";
form.append(nameLabel);
const nameInput = document.createElement("input");
nameInput.placeholder = "input name here";
form.append(nameInput);

//restaurant
const restaurantLabel = document.createElement("label");
restaurantLabel.textContent = "Restaurant";
form.append(restaurantLabel);
const restaurantInput = document.createElement("input");
form.append(restaurantInput);
//image url
const imageUrlLabel = document.createElement("label");
imageUrlLabel.textContent = "Image: ";
form.append(imageUrlLabel);
const imageUrlInput = document.createElement("input");
imageUrlInput.placeholder = "Image url goes here";
form.append(imageUrlInput);
//rating

// comment textbox

// create button
// function handleCLick(img) {
//   img.addEventListener('click', function () {
//     let details = document.createElement('p')
//   })
// }

//display ramen function
// function displayRamen(clickImage) {}

// function clickImage(img) {
// console.log(image_container.value);
// return img;
// const images = imageDiv.children;
// console.log(images);
// for (image of images) {
//   displayRamen();
// }
// }

// displayRamen();
// let images = imageDiv.querySelector("img");
