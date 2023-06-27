const BASE_URL = "www.thecocktaildb.com/api/json/v1/1/search.php";

export const GET = async (endpoint) => {
  const res = await fetch(BASE_URL + endpoint);

};
