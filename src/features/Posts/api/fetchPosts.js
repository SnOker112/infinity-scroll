export async function fetchPosts(page = 1) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_page=${page}"
  );
  if (!response.ok) {
    throw new Error("Error connect");
  }
  return response.json();
}
