function getIssLocation() {
  return fetch('/api')
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        return response.text();
      }
    })
    .catch((error) => error);
}

function displayIssLocation() {
  getIssLocation()
    .then((response) => {
      document.querySelector('div').innerHTML = response;
    });
}

document.querySelector('button').onclick = displayIssLocation;
