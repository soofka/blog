function getIssLocation() {
  return fetch('/api')
    .then((response) => response.json())
    .catch((error) => error);
}

function displayIssLocation() {
  document.querySelector('div').innerHTML = getIssLocation();
}

document.querySelector('button').onclick = displayIssLocation;
