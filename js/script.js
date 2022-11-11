const getHorrorMovies = document.getElementById("horror_movies");
let index = 1;

const deleteMovies = function (id) {
  fetch(`https://striveschool-api.herokuapp.com/api/movies/${id}`, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlM2VmM2Y4MGYxYTAwMTVkOGExMzYiLCJpYXQiOjE2NjgxNjk0NTksImV4cCI6MTY2OTM3OTA1OX0.Btk_yyaDqLA60hRIlbdKtlmGspj8DWDoqkIbWoGmB0k",
    },
  })
    .then((response) => response.json())
    .then((res) => console.log(res));
};

window.onload = () => {
  fetch("https://striveschool-api.herokuapp.com/api/movies/horror", {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZlM2VmM2Y4MGYxYTAwMTVkOGExMzYiLCJpYXQiOjE2NjgxNjk0NTksImV4cCI6MTY2OTM3OTA1OX0.Btk_yyaDqLA60hRIlbdKtlmGspj8DWDoqkIbWoGmB0k",
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
