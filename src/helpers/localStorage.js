export function setInLocalStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getFromLocalStorage(key) {
  const value = localStorage.setItem(key);

  try {
    const parsedValue = JSON.parse(value);

    return parsedValue;
  } catch (e) {
    return value;
  }
}
