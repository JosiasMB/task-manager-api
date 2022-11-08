const container = document.getElementById("container");
const section = document.getElementById("section");

let users = [];
// Function that gets data from API
async function getUsers() {
  const apiUrl = "http://localhost:3000/view";
  try {
    // fetch request
    const response = await fetch(apiUrl);
    users = await response.json();
    displayUsers(users);
    // displayUsers2(users);
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
    // let id = document.getElementById("id");
    // id.textContent = users[i]._id;

    // let email = document.createElement("p");
    // email.textContent = "Email: " + users[i].email;
    // let age = document.createElement("p");
    // age.textContent = "Age: " + users[i].age;
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
// Function to display data on HTML
// function displayUsers2(users) {
//   console.log(users);
//   for (i = 0; i < users.length; i++) {
// let card = document.createElement("div");
// card.classList.add("card");
// let content = document.createElement("div");
// content.classList.add("content");
// let imgBx = document.createElement("div");
// imgBx.classList.add("imgBx");
// let img = document.createElement("div");
// img.setAttribute("src", "Img/userImg.png");
// let contentBx = document.createElement("div");
// contentBx.classList.add("contentBx");
// let h3 = document.createElement("h3");
// h3.textContent = "ID";
// let br = document.createElement("br");
// let span = document.createElement("span");
// span.textContent = users[i]._id;
// let name = document.createElement("li");
// name.textContent = "Name:";
// let email = document.createElement("li");
// email.textContent = "email:";
// let age = document.createElement("li");
// age.textContent = "age:";
// let pName = document.createElement("p");
// pName.textContent = users[i].name;
// let pEmail = document.createElement("p");
// pEmail.textContent = users[i].email;
// let pAge = document.createElement("p");
// pAge.textContent = users[i].age;

// age.appendChild(pAge);
// ul.appendChild(age);
// email.appendChild(pEmail);
// ul.appendChild(email);
// name.appendChild(pName);
// ul.appendChild(name);
// card.appendChild(ul);
// he3.appendChild(span);
// h3.appendChild(br);
// contentBx.appendChild(h3);
// content.appendChild(contentBx);
// imgBx.appendChild(img);
// content.appendChild(imgBx);
// card.appendChild(content);
// container.appendChild(card);
// section.appendChild(container);
//   }
// }
