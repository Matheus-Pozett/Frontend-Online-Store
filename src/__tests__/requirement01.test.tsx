// src/__tests__/requirement01.test.tsx

import * as api from '../services/api';
import mockedCategoriesResult from '../__mocks__/categories';
import mockFetch from '../__mocks__/mockFetch';
import { vi } from 'vitest';

global.fetch = vi.fn(mockFetch as any);

describe('1 - Implemente o módulo de acesso à api do Mercado Livre', () => {
  it('Implementa a função `getCategories`', () => {

    return api.getCategories().then((categories: any) => {
      expect(global.fetch).toHaveBeenCalled();
      expect(global.fetch).toHaveBeenCalledWith(
        '/api/sites/MLB/categories',
        expect.anything()
      );
      expect(categories).toEqual(mockedCategoriesResult);
    });
  });

  it('Implementa a função `getProductsFromCategoryAndQuery`', () => {
    const categoryId = 'category1';
    const query = 'my-query';
    const successResponseBody = {};

    return api.getProductsFromCategoryAndQuery(categoryId, query).then((products: any) => {
      expect(global.fetch).toHaveBeenCalled();
      expect(global.fetch).toHaveBeenCalledWith(
        `/api/sites/MLB/search?category=${categoryId}&q=${query}`,
        expect.anything()
      );
    });
  });
});