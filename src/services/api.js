import axios from "axios";

const user = import.meta.env.VITE_GITHUB_USERNAME;


const http = axios.create({
  baseURL: `https://api.github.com/users/${user}/repos`
});

export const getRepos = () => http.get().then(response => response.data);
