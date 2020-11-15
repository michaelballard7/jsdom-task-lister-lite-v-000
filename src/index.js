document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let userText = document.querySelector('#new-task-description');

  let form = document.querySelector('#create-task-form');

  let taskList = document.querySelector('#tasks')

  form.addEventListener('submit', (e) => {

      e.preventDefault();
      let val = userText.value;



  })


});
