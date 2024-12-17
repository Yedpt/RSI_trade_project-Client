const BASE_URL = 'http://localhost:5173/news';

export const getAllNews = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const getNewsById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
};
