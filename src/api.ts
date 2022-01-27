import axios from 'axios';

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/'
});

export const api = {
  getAllPosts: async () => {
    let response = await http.get('/albums');
    return response.data;
  },
  getAlbum: async (id: string) => {
    let response = await http.get(`/album/${id}`);
    return response.data;
  },
  getPhotosFromAlbum: async (id: string) => {
    let response = await http.get(`/album/${id}/photos`);
    return response.data;
  },
  getPhoto: async (id: string) => {
    let response = await http.get(`/photos/${id}`);
    return response.data;
  }
}