export const fetchGiphy = (query) => {
  return fetch(
    `https://api.giphy.com/v1/gifs/search?q=${query}&api_key={key}&limit=1`
  );
};
