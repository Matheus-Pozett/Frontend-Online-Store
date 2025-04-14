import { useEffect, useState } from 'react';
import { getCategories } from '../../services/api';
import { CategoriesType } from '../../types';

function Categories() {
  const [categoryList, setCategoryList] = useState<CategoriesType[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getCategories();
        setCategoryList(categories);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCategories();
  }, []);
  return (
    <section>
      {categoryList.map((element) => (
        <button key={ element.id } data-testid="category">{element.name}</button>
      ))}
    </section>
  );
}

export { Categories };
