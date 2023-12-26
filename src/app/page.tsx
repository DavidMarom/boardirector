"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { getAllCategories } from '@/services/recipes';
import useRecipesStore from '../store/recipes';
import { CategoryType } from '@/utils/types';


export default function Home() {
  const router = useRouter();
  const setCategories = useRecipesStore(state => state.setCategories);

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res.categories.map((category: CategoryType) => category.strCategory));
      router.push('/Recipes');
    }
    );
  }
    , []);

  return (<div></div>)
}
