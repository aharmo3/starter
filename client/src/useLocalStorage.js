export default function useLocalStorage(key) {
  const get = (key) => {
    const value = localStorage.getItem(key);
    // Check if value is JSON object
    if (value) {
      return value[0] === "{" ? JSON.parse(value) : value;
    }
  };

  const set = (value) => {
    const stringValue =
      typeof value === "string" ? value : JSON.stringify(value);
    localStorage.setItem(key, stringValue);
  };
  const value = get(key);
  return [value, set];
}
