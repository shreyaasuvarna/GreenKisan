const API_URL = (
  import.meta.env.VITE_API_URL ||
  "https://green-kisan-backend.onrender.com"
)
  .trim()
  .replace(/\/+$/, "");

export default API_URL;