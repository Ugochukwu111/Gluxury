// Save to localStorage
export function saveToLocalStorage(key, value) {
  try {
    // If value is an object, stringify it
    const storedValue = typeof value === "object" ? JSON.stringify(value) : value;
    localStorage.setItem(key, storedValue);
  } catch (err) {
    console.error("Error saving to localStorage:", err);
  }
}

// Retrieve from localStorage
export function getFromLocalStorage(key) {
  try {
    const storedValue = localStorage.getItem(key);
    // Try to parse JSON, if fails return as string
    return storedValue ? JSON.parse(storedValue) : null;
  } catch (err) {
    console.error("Error reading from localStorage:", err);
    return null;
  }
}

// Remove from localStorage
export function removeFromLocalStorage(key) {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error("Error removing from localStorage:", err);
  }
}
