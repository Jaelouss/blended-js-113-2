export function markUpItem(obj) {
  return `  <li data-id='${obj.id}' class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>${obj.taskTitle}</h3>
      <p>${obj.taskDescr}</p>
  </li>`;
}

export function markUpList(arr) {
  return arr.map(markUpItem).join('');
}
