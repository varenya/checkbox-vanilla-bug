const inputText = document.querySelector("#test-checkbox");
const labelText = document.querySelector(".label-text");
// const checkboxText = document.querySelector(".checkbox-text");

let state = false;

inputText.addEventListener("change", function eventListener(e) {
  state = !state;
  if (state) {
    e.target.setAttribute("checked", state);
    labelText.textContent = "checked";
  } else {
    e.target.removeAttribute("checked");
    labelText.textContent = "not checked";
  }
});
