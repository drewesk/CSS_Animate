const view = document.querySelector("input");

function updateSideView() {
  document.querySelector('main').classList.toggle('view-on', view.checked)
}

view.addEventListener('click', updateSideView);
updateSideView();
