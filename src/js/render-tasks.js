import refs from './refs';

export function renderTasks(markUp) {
  refs.list.insertAdjacentHTML('beforeend', markUp);
}
