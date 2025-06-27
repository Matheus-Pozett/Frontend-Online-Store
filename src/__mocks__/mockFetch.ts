import categories from './categories';
import query from './query';
import details from './details';
import searchQuery from './searchQuery';

const mockFetch = (url: string) => {
  if (url === 'https://api.mercadolibre.com/sites/MLB/categories' || url === '/api/sites/MLB/categories') {
    return Promise.resolve({
      json: () => Promise.resolve(categories),
    });
  }

  if (url.includes('/api/sites/MLB/search?category=') || url.includes('https://api.mercadolibre.com/sites/MLB/search?category=')) {
    if (url.includes('&q=')) {
      return Promise.resolve({
        json: () => Promise.resolve(query),
      });
    }
    return Promise.resolve({
      json: () => Promise.resolve(query),
    });
  }

  if (url.includes('/api/sites/MLB/search?q=') || url.includes('https://api.mercadolibre.com/sites/MLB/search?q=')) {
    return Promise.resolve({
      json: () => Promise.resolve(searchQuery),
    });
  }

  if (url.includes('/api/items/') || url.includes('https://api.mercadolibre.com/items/')) {
    return Promise.resolve({
      json: () => Promise.resolve(details),
    });
  }

  return Promise.reject('Houve algo de errado com o endpoint, verifique se ele está correto');
};

export default mockFetch;