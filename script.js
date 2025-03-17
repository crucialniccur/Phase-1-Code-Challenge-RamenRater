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
form.style.display = "flex";
form.style.flexDirection = "column";
//name
const nameLabel = document.createElement("label");
nameLabel.textContent = "Name:";
form.append(nameLabel);
const nameInput = document.createElement("input");
nameInput.placeholder = "input name here";
nameInput.setAttribute("id", "name_input");
form.append(nameInput);

//restaurant
const restaurantLabel = document.createElement("label");
restaurantLabel.textContent = "Restaurant:";
form.append(restaurantLabel);
const restaurantInput = document.createElement("input");
restaurantInput.setAttribute("id", "restaurant_input");
restaurantInput.placeholder = "restaurant";

form.append(restaurantInput);
//image url
const imageUrlLabel = document.createElement("label");
imageUrlLabel.textContent = "Image: ";
form.append(imageUrlLabel);
const imageUrlInput = document.createElement("input");
imageUrlInput.placeholder = "Image url goes here";
imageUrlInput.setAttribute("id", "image_url_input");
form.append(imageUrlInput);
//rating
const ratingLabel = document.createElement("label");
ratingLabel.textContent = "Rating: ";
form.append(ratingLabel);
const ratingInput = document.createElement("input");
ratingInput.placeholder = "Your rating goes here";
ratingInput.setAttribute("id", "rating_input");
form.append(ratingInput);
// comment textbox
const textAreaLabel = document.createElement("label");
textAreaLabel.textContent = "Comment:";
form.append(textAreaLabel);
textAreaInput = document.createElement("textarea");
textAreaInput.placeholder = "Your comment goes here";
textAreaInput.setAttribute("id", "comment_place");
form.append(textAreaInput);
// create button
const createButton = document.createElement("button");
createButton.setAttribute("id", "create_magic");
createButton.textContent = "Create Magic";
form.append(createButton);

// document.querySelector("form").addEventListener("submit", (e) => {
//   e.preventDefault();
// });

function showPathToImages() {
  const images = document.querySelectorAll("#image_container img");
  images.forEach((img) => {
    const pathElement = document.createElement("p");
    pathElement.textContent = img.src;
    pathElement.style.fontSize = "10px";
    // img.parentNode.appendChild(pathElement);
  });
}
function addSubmitListener() {
  document.querySelector("form").addEventListener("submit", (e) => {
    // handle form default behaviour
    e.preventDefault();
    //access the name input
    const nameValue = document.getElementById("name_input").value;
    console.log(`Name: ${nameValue}`);
    let newName = nameValue.name;
    // access restaurant value
    const restaurantValue = document.getElementById("restaurant_input").value;
    console.log(`The restaurant: ${restaurantValue}`);
    // let newRestaurant = restaurantValue;
    //image url
    // const imageUrlValue = document.getElementById("image_url_input").value;
    // console.log(`Image url : ${imageUrlValue}`);
    // let newImageSrc = imageUrlValue;
    // access the ratings value
    const rateValue = document.getElementById("rating_input").value;
    console.log(`Rating: ${rateValue}`);
    // let newRate = rateValue;
    //access comments value
    const commentValue = document.getElementById("comment_place").value;
    console.log(`Comment is ${commentValue}`);
    // let newComment = commentValue;
    // console.log(e.target.name_input.value);

    //creating a new image element
    let newImage = document.createElement("img");
    newImage.style.width = "150px";
    newImage.style.height = "150px";
    // newImage.src = newImageSrc;
    const imageUrlValue = document.getElementById("image_url_input").value;
    // newImage.src = imageUrlValue;
    console.log(imageUrlValue);
    console.log("Input value:", imageUrlValue);

    // if (imageUrlValue) {
    //   const newImage = document.createElement("img");
    //   newImage.src = imageUrlValue;
    //   newImage.style.width = "150px";
    //   newImage.style.height = "150px";
    //   document.getElementById("image_container").appendChild(newImage);
    // }
    // getting internal and external files
    if (imageUrlValue) {
      // const newImage = document.createElement("img");

      if (
        imageUrlValue.startsWith("http") ||
        imageUrlValue.startsWith("https")
      ) {
        newImage.src = imageUrlValue;
      } else {
        newImage.src = imageUrlValue.startsWith("http")
          ? imageUrlValue
          : `./items/images/${imageUrlValue}`;
      }
      document.getElementById("ramen-menu").appendChild(newImage);
      console.log(`the image url is :  ${imageUrlValue}`);
    }
    // newImage.alt = restaurantValue;
    newImage.alt = newImage.alt;
    // newImage.rating = newRate;
    newImage.rating = rateValue;
    // newImage.name = newName;
    // newImage.restaurant = newRestaurant;

    // append the new image
    const imageContainer = document.getElementById("image_container");
    imageContainer.appendChild(newImage);
    document.getElementById("ramen-menu").appendChild(newImage);
  });
}

showPathToImages();
addSubmitListener();
// console.log(textAreaInput.comment_place.value);
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
