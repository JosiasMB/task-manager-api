console.log("Hello world");
const container = document.getElementById("container");

let users = [];
// Function that gets data from API
async function getUsers() {
  const apiUrl = "http://localhost:3000/users";
  try {
    // fetch request
    const response = await fetch(apiUrl);
    users = await response.json();
    displayUsers(users);
    console.log(users);
  } catch (error) {
    // catch error
  }
}
getUsers();

// Function to display data on HTML
function displayUsers(users) {
  for (i = 0; i < users.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    let id = document.createElement("p");
    id.textContent = "ID: " + users[i]._id;
    let name = document.createElement("p");
    name.textContent = "Name: " + users[i].name;
    let email = document.createElement("p");
    email.textContent = "Email: " + users[i].email;
    let age = document.createElement("p");
    age.textContent = "Age: " + users[i].age;
    let img = document.createElement("img");
    img.setAttribute("src", "Img/userImg.png");
    img.classList.add("photo");
    card.appendChild(img);
    card.appendChild(id);
    card.appendChild(name);
    card.appendChild(email);
    card.appendChild(age);
    container.appendChild(card);
  }
}
