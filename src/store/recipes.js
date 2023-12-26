import { create } from "zustand";

const useRecipesStore = create((set) => ({
    recipes: ['aaa'],
    setRecipes: () => set((state) => ({ recipes: state })),

    selectedCategory: "",
    setSelectedCategory: (category) => set((state) => ({ selectedCategory: category })),
    
    categories: [],
    setCategories: (categories) => set((state) => ({ categories })),
    
    favorites: [],
    setFavorites: (favorites) => set(() => ({ favorites })),
}));

export default useRecipesStore;
