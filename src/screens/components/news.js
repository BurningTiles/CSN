const url =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=47f8a22d1e394d14bd9b4fa3c17ca27f";

export async function getNews() {
  let result = await fetch(url).then(response => response.json());
  return result.articles;
}