# Phase-1-Code-Challenge-RamenRater

The link to the live page hosted on github is :

- [This](https://crucialniccur.github.io/Phase-1-Code-Challenge-RamenRater/)
  or copy this link on a new tab and paste :

```
https://crucialniccur.github.io/Phase-1-Code-Challenge-RamenRater/
```

---

## Setting up The Ramen Rater.

Click the link above to navigate to the live page.
There , a form and sosme images are visible

![](https://i.imgur.com/5KImYCs.png)

Fill out the form and according to the placeholder texts.
In the image url section, add an image link well for it to work.
After filling out the input fields , tap on the create Magic button and abracadabra!.

---

## Instructions for the Code challenge.

## Ramen Rating App Project

### Overview

In this project, you'll create a web application for rating ramen dishes entirely from scratch. You'll practice handling user events, manipulating the DOM, structuring JavaScript code effectively, and using Git basics. No server communication or external servers are required; instead, you'll use static data provided within your project.

---

### Objectives

- Use JavaScript to update the DOM based on user interactions dynamically
- Practice handling user input and events
- Organize your code logically into functions
- Learn how to create and manage a project repository using Git

### Project Setup

1. **Initialize your Project**:

- Create a new directory named `ramen-rating-app`.
- Navigate into your project folder.

2. **Start the app:**

- Create a `index.html` file with a basic HTML boilerplate.
- Link your JavaScript file (`index.js`) to your HTML file using the `<script>` tag.
- Open your `index.html` file directly in your browser.

### Git Workflow

- Initialize a Git repository:

```
git init
```

- Commit your changes regularly:

```
git add .
git commit -m "Your descriptive commit message"
```

- Create a public GitHub repository and push your commits:

```
git remote add origin YOUR_REPO_LINK
git push -u origin main
```

### Data Stub

Place the following stub data in your JavaScript file:

```
const ramens = [
   { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
   { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
   { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
];
```

### Project Resources

Download the following Ramens Dishes images for use.

![gyukotsu.jpg](https://moringa.instructure.com/courses/967/files/517801/preview)![kojiro.jpg](https://moringa.instructure.com/courses/967/files/517800/preview)![naruto.jpg](https://moringa.instructure.com/courses/967/files/517799/preview)![nirvana.jpg](https://moringa.instructure.com/courses/967/files/517798/preview)![shoyu.jpg](https://moringa.instructure.com/courses/967/files/517797/preview)

You can also include your images from the internet that are free to use

#### Sample UI

![sample.gif](https://moringa.instructure.com/courses/967/files/517804/preview)

### Project Requirements

#### Deliverables

1. **Display Ramen Images:**

   - Create a `displayRamens()` function.
   - Load images from the `ramens` array using standard JavaScript array methods (e.g., `forEach`) and append them as `<img>` elements inside the `#ramen-menu` div.

2. **Ramen Detail Display:**

   - Clicking a ramen image triggers a `handleClick` function that displays the ramen details (`name`, `restaurant`, and optionally `rating` and `comment`) in the `#ramen-detail` div.

3. **Handle New Ramen Form Submission:**

   - Create an `addSubmitListener` function.
   - When a user fills out the form and submits it, add the new ramen image to the `#ramen-menu` div. Updating the DOM is sufficient (no data persistence required).

4. **Initialize App:**

   - Write a `main` function that initializes your application by invoking:
     - `displayRamens()`
     - `addSubmitListener()`
   - Ensure that the DOM content is fully loaded before the main function runs.

### Advanced Requirements (Optional)

- Display the details for the first ramen automatically on page load without user interaction.
- Allow users to edit the rating and comments for selected ramen and display updated info dynamically.
- Implement deletion functionality to remove a ramen from the display.

### Project Submission

Submit your work by pushing your code to GitHub. Your repository must show a clear commit history reflecting your step-by-step development.
