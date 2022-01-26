import axios from 'axios';

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/albums'
});

export const api = {
  getAllPosts: async () => {
    let response = await http.get(' ');
    return response.data;
  },
}