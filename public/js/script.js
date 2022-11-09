const container = document.getElementById("container");
const section = document.getElementById("section");
const buscar = document.getElementById("buscar");
const card = document.getElementById("card");
const x = document.getElementById("x");
const text = document.getElementById("text");

let users = [];
// Function that gets data from API
async function getUsers() {
  const apiUrl = "http://localhost:3000/view";
  try {
    // fetch request
    const response = await fetch(apiUrl);
    users = await response.json();
    displayUsers(users);
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
    let img = document.createElement("img");
    img.setAttribute("src", "Img/userImg.png");

    let imgBx = document.createElement("div");
    imgBx.classList.add("imgBx");
    imgBx.appendChild(img);
    let content = document.createElement("div");
    content.classList.add("content");
    let contentBx = document.createElement("div");
    contentBx.classList.add("contentBx");
    let h3 = document.createElement("h3");
    h3.textContent = "Name";
    let br = document.createElement("br");
    let span = document.createElement("span");
    span.textContent = users[i].name;
    let ul = document.createElement("ul");
    ul.classList.add("sci");
    let name = document.createElement("li");
    name.textContent = "ID:";
    let id = document.createElement("p");
    id.textContent = users[i]._id;
    let email = document.createElement("li");
    email.textContent = "Email:";
    let pEmail = document.createElement("p");
    pEmail.textContent = users[i].email;
    let age = document.createElement("li");
    age.textContent = "age:";
    let pAge = document.createElement("p");
    pAge.textContent = users[i].age;
    ////////////////////////////////////////////////////////////////
    content.appendChild(imgBx);
    content.appendChild(contentBx);
    contentBx.appendChild(h3);
    h3.appendChild(br);
    h3.appendChild(span);
    card.appendChild(content);
    ul.appendChild(name);
    name.appendChild(id);
    ul.appendChild(email);
    email.appendChild(pEmail);
    ul.appendChild(age);
    age.appendChild(pAge);
    card.appendChild(ul);
    container.appendChild(card);
    section.appendChild(container);
  }
}
buscar.addEventListener("click", getUser);
function see() {
  card.classList.add("see");
}
function none() {
  card.classList.remove("see");
}
x.addEventListener("click", none);

// Function that gets data from API
async function getUser() {
  let id = text.value;
  const apiUrl = `http://localhost:3000/users/${id}`;
  see();
  try {
    // fetch request
    const response = await fetch(apiUrl);
    users = await response.json();
    displayUser(users);
  } catch (error) {
    // catch error
  }
}

function displayUser(user) {
  document.getElementById("name").textContent = user.name;
  document.getElementById("liId").textContent = user._id;
  document.getElementById("pEmail").textContent = user.email;
  document.getElementById("pAge").textContent = user.age;
}
