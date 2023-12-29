export function getocalData(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}
export function setLocalData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function removeLocalData(key) {
  localStorage.removeItem(key);
}
