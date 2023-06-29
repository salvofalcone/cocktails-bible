const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php";

export const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);
  const data = await res.json();

  return data;
};
