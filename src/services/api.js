import axios from "axios";

const user = import.meta.env.VITE_GITHUB_USERNAME;
console.log(`Fetching from: https://api.github.com/users//repos`);

const http = axios.create({
  baseURL: `https://api.github.com/users/${user}/repos`
});

export const getRepos = () => http.get().then(response => response.data);
