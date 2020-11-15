document.addEventListener("DOMContentLoaded", () => {

  let userText = document.querySelector('#new-task-description');

  let form = document.querySelector('#create-task-form');

  let taskList = document.querySelector('#tasks')

  let delBtn = document.querySelector('.del')

  form.addEventListener('submit', (e) => {

      // prevent submit
      e.preventDefault();

      // get the text value
      let val = userText.value;

      // create li elememt
      let task = document.createElement('li');


      // set li value with delete btn as html template
      task.innerHTML = `${val}  <button class='del'> X </button>`;

      // append li to ul
      taskList.appendChild(task)
  })

  if(delBtn){

      delBtn.addEventListener('click', function(){
          console.log('called ')
      })

  }



});
