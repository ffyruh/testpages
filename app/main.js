
const moveToAll = () => {
  window.location = '/testpages/all/';
}

const moveToSingle = () => {
  window.location = '/testpages/single/';
}

const main = () => {
  if (window.location.pathname !== '/testpages/') return;

  const allButton = document.querySelector('#all');
  const singleButton = document.querySelector('#single');
  allButton.addEventListener('click', moveToAll);
  singleButton.addEventListener('click', moveToSingle);
}

main();
