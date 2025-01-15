const moveToAll = () => {
  window.location = '/pages/all.html'
}

const moveToSingle = () => {
  window.location = '/pages/single.html'
}

const main = () => {
  if (window.location.pathname !== '/') return;

  const allButton = document.querySelector('#all');
  const singleButton = document.querySelector('#single');
  allButton.addEventListener('click', moveToAll);
  singleButton.addEventListener('click', moveToSingle);
}

main();
