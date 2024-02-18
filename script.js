const scriptURl =
  "https://script.google.com/macros/s/AKfycbxyCsZ-6bJ31hlobSQA92rqX7HUoKvP3tjJhtgXv-9TVWQB4dZPtXb4fGdw-8GNAGaAgg/exec";
const form = document.forms["google-sheet"];
const loading = document.getElementById('loading');

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loading.style.display = 'block';

  fetch(scriptURl, { method: "post", body: new FormData(form) })
    .then((response) => {
      if (response.ok) {
        form.reset();
        window.location.href = "thankyou.html";
      } else {
        throw new Error("Network response was not ok.");
      }
    })
    .catch(error => console.log("Error!", error.message))
    .finally(() => {
        loading.style.display = 'none';
    });
});
