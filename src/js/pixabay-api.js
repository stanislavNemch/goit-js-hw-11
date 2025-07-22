import axios from 'axios';

// Теперь базовый URL указывает на наш локальный прокси
const BASE_URL = '/api/';

export function getImagesByQuery(query) {
  // Ключ API больше не нужен на клиенте, он будет добавлен на сервере
  const params = {
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  return axios
    .get(BASE_URL, { params })
    .then(response => response.data)
    .catch(error => {
      console.error('Error fetching images via proxy:', error);
      throw new Error('Failed to fetch images from Pixabay via proxy.');
    });
}
