const API_URL = "https://jsonplaceholder.typicode.com/posts";
const form = document.querySelector(".form");
const titleInput = document.querySelector(".title");
const bodyInput = document.querySelector(".body");
const submitBtn = document.querySelector(".btn");
const message = document.querySelector(".message");
const postsList = document.querySelector(".posts");

let posts = [];
let editingId = null;
let nextId = 101;

async function loadPosts() {
  message.textContent = "Loading";
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    posts = data.slice(0, 10);

    message.textContent = "";
    showPosts();
  } catch (error) {
    message.textContent = error.message;
  }
}

function showPosts() {
  postsList.innerHTML = "";
  posts.forEach(function (post) {
    const card = document.createElement("li");
    card.innerHTML =
      "<h2>" +
      post.title +
      "</h2>" +
      "<p>" +
      post.body +
      "</p>" +
      '<button class="edit-btn">Edit</button>' +
      '<button class="delete-btn">Delete</button>';

    const editBtn = card.querySelector(".edit-btn");
    const deleteBtn = card.querySelector(".delete-btn");

    editBtn.addEventListener("click", function () {
      startEdit(post);
    });

    deleteBtn.addEventListener("click", function () {
      deletePost(post);
    });

    postsList.appendChild(card);
  });
}

function resetForm() {
  titleInput.value = "";
  bodyInput.value = "";
  editingId = null;
  submitBtn.textContent = "Create Post";
}

function startEdit(post) {
  editingId = post.id;
  titleInput.value = post.title;
  bodyInput.value = post.body;
  submitBtn.textContent = "Save Changes";
}

function submitForm(event) {
  event.preventDefault();
  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();

  if (title === "" || body === "") {
    message.textContent = "Title and Body cannot be empty.";
    return;
  }

  if (editingId === null) {
    createPost(title, body);
  } else {
    updatePost(title, body);
  }
}

async function createPost(title, body) {
  message.textContent = "Creating post...";
  submitBtn.disabled = true;
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: 1,
      }),
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const newPost = await response.json();
    newPost.id = nextId;
    nextId++;
    posts.unshift(newPost);

    showPosts();
    resetForm();

    message.textContent = "Post created successfully.";
  } catch (error) {
    message.textContent = error.message;
  }

  submitBtn.disabled = false;
}

async function updatePost(title, body) {
  message.textContent = "Updating post...";
  submitBtn.disabled = true;

  const post = posts.find(function (item) {
    return item.id === editingId;
  });

  try {
    const response = await fetch(API_URL + "/" + post.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        body: body,
        userId: post.userId,
      }),
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    post.title = title;
    post.body = body;

    showPosts();
    resetForm();

    message.textContent = "Post updated successfully.";
  } catch (error) {
    message.textContent = error.message;
  }

  submitBtn.disabled = false;
}

async function deletePost(post) {
  const sure = confirm("Are you sure you want to delete this post?");

  if (sure === false) {
    return;
  }

  message.textContent = "Deleting post...";

  try {
    const response = await fetch(API_URL + "/" + post.id, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Request failed");
    }

    posts = posts.filter(function (item) {
      return item.id !== post.id;
    });

    if (editingId === post.id) {
      resetForm();
    }

    showPosts();

    message.textContent = "Post deleted successfully.";
  } catch (error) {
    message.textContent = error.message;
  }
}

form.addEventListener("submit", submitForm);

loadPosts();
