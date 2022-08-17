const getAllProducts = async () => {
  const response = await fetch(`/api`);
  const data = await response.json();
  return data;
};

export { getAllProducts };
