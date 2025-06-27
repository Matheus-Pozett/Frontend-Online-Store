// src/services/api.ts

const ACCESS_TOKEN = 'APP_USR-7426586503092336-062619-d719858163b504dfd628311e119ade64-207091701';

export async function getCategories() {
  // Alterado para usar o proxy
  const response = await fetch('/api/sites/MLB/categories', {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(categoryId: string, query: string) {
  // Alterado para usar o proxy
  const response = await fetch(`/api/sites/MLB/search?category=${categoryId}&q=${query}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
}

export async function getProductById(productId: string) {
  // Alterado para usar o proxy
  const response = await fetch(`/api/items/${productId}`, {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
  const data = await response.json();
  return data;
}
