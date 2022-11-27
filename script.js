document.getElementById("add").addEventListener("click", function () {
  add();
});

let add = () => {
  let toDo = document.getElementById("input").value;

  let card = document.createElement("div");
  card.setAttribute("id", "card");
  card.innerHTML =
    `<div id="list">
    <p>` +
    toDo +
    `</p>
  </div>
  <div class="check-wrapper">
  <i class="fa fa-check" aria-hidden="true"></i>
  </div>`;
  let cardWrapper = document.querySelector(".card-wrapper");
  cardWrapper.append(card);
  document.getElementById("input").value = "";
};

let check = document.querySelector(".card-wrapper");
check.addEventListener("click", function (e) {
  if (e.target.className === "fa fa-check") {
    let card = document.querySelector("#card");
    card.remove();
  }
});
