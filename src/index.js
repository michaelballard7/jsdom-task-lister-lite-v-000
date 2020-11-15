document.addEventListener("DOMContentLoaded", () => {
  // your code here

  let userText = document.querySelector('#new-task-description');

  let form = document.querySelector('#create-task-form');

  let taskList = document.querySelector('#tasks')

  form.addEventListener('submit', (e) => {

      // prevent submit
      e.preventDefault();

      // get the text value
      let val = userText.value;

      // create li elememt
      let task = document.createElement('li');


      // set li value with delete btn as html template
      task.innerHTML = `${val} <button> X </button>`;

      // append li to ul
      taskList.appendChild(task)
  })


});
