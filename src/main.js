import refs from './js/refs';
import { nanoid } from 'nanoid';
import { markUpItem, markUpList } from './js/markup-tasks';
import { renderTasks } from './js/render-tasks';
import { getLocalData, setLocalData } from './js/local-storage-api';

refs.form.addEventListener('submit', formSubmit);

let localUserData = getLocalData();

renderTasks(markUpList(localUserData));

function formSubmit(event) {
  event.preventDefault();
  let userInput = {
    id: nanoid(),
    taskTitle: event.currentTarget.elements.taskName.value.trim(),
    taskDescr: event.currentTarget.elements.taskDescription.value.trim(),
  };
  localUserData.push(userInput);
  setLocalData(localUserData);

  renderTasks(markUpItem(userInput));
}


refs.list.addEventListener("click", deleteItem);

function deleteItem(event) {
  // console.log(event.target.nodeName);
  if(event.target.nodeName !== "BUTTON") {
    return;
  }
  // console.log("btn");
  const id = event.target.closest("[data-id]").dataset.id
  // console.log(id);
  localUserData = localUserData.filter(data => data.id !== id) 
  setLocalData(localUserData);
  refs.list.innerHTML = "";
  renderTasks(markUpList(localUserData))
}

