const loadBtn = document.querySelector(".load");
const searchInput = document.querySelector(".search");
const message = document.querySelector(".message");
const usersList = document.querySelector(".users");

let allUsers = [];
async function loadUsers() {
  message.textContent = "Loading...";
  usersList.innerHTML = "";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Request failed");
    }

    allUsers = await response.json();

    showUsers(allUsers);
  } catch (error) {
    message.textContent = error.message;
  }
}

function showUsers(users) {
  usersList.innerHTML = "";
  if (users.length === 0) {
    message.textContent = "No users found";
    return;
  }

  message.textContent = "";
  users.forEach(function (user) {
    const card = document.createElement("li");
    card.innerHTML =
      "<h2>" +
      user.name +
      "</h2>" +
      "<p>Username: " +
      user.username +
      "</p>" +
      "<p>Email: " +
      user.email +
      "</p>" +
      "<p>Phone: " +
      user.phone +
      "</p>" +
      "<p>Website: " +
      user.website +
      "</p>";

    usersList.appendChild(card);
  });
}
function searchUsers() {
  const text = searchInput.value.toLowerCase();
  const result = allUsers.filter(function (user) {
    return (
      user.name.toLowerCase().includes(text) ||
      user.username.toLowerCase().includes(text)
    );
  });

  showUsers(result);
}

loadBtn.addEventListener("click", loadUsers);
searchInput.addEventListener("input", searchUsers);
