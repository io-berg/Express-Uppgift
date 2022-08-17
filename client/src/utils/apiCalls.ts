const API_URL = "http://localhost:3000";

const getAllProducts = async () => {
  const response = await fetch(`${API_URL}/`);
  const data = await response.json();
  return data;
};

export { getAllProducts };
