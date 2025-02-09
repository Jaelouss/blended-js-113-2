const LOCAL_STORAGE_KEY = 'userTaskList';

export function getLocalData() {
  return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
}
export function setLocalData(arr) {
  return localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(arr));
}
