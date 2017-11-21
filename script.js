const view = document.querySelector("input");

function updateSideView() {
  document.body.classList.toggle('view-on', view.checked);
}

view.addEventListener('click', updateSideView);
updateSideView();
