const getHorrorMovies = document.getElementById("horror_movies");
let index = 1;

const deleteMovies = function (id) {
  fetch(`https://striveschool-api.herokuapp.com/api/movies/${id}`, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcwZTkyZGM5ODM4NjAwMTVhMzUwNjUiLCJpYXQiOjE2NjgzNDQxMDksImV4cCI6MTY2OTU1MzcwOX0.O6zbMgaXZKup450D5PDDsxGN2fE5Py3yLNPcnG1QHs0",
    },
  })
    .then((response) => response.json())
    .then((res) => console.log(res));
};

function addNewMovie() {
  const body = {
    name: "TESsdvcsdT",
    description: "Tessdvst",
    category: "horror",
    imageUrl: "dcs",
  };

  const headers = {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcwZTkyZGM5ODM4NjAwMTVhMzUwNjUiLCJpYXQiOjE2NjgzNDQxMDksImV4cCI6MTY2OTU1MzcwOX0.O6zbMgaXZKup450D5PDDsxGN2fE5Py3yLNPcnG1QHs0",
  };

  return fetch("https://striveschool-api.herokuapp.com/api/movies", {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/api/movies/horror", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzcwZTkyZGM5ODM4NjAwMTVhMzUwNjUiLCJpYXQiOjE2NjgzNDQxMDksImV4cCI6MTY2OTU1MzcwOX0.O6zbMgaXZKup450D5PDDsxGN2fE5Py3yLNPcnG1QHs0",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        console.log(data[2]);
        getHorrorMovies.innerHTML += `
    <div class="col-2">
      <div class="card">
        <img src="${element.imageUrl}" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">${element.name}</h5>
          <span class="card-text">${element.category}</span>
          <p class="card-text">${element.description}</p>
          <a href="#" class="btn btn-primary">edit</a>
          <a href="#" class="btn btn-primary" onclick="deleteMovies('${String(
            element._id
          )}')">delete</a>
        </div>
      </div>
    </div>
    `;
        console.log(getHorrorMovies);
      });
    });
};

const input = document.getElementById("movieName");
console.log(input.value);
