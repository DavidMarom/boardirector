import { create } from "zustand";

const useRecipesStore = create((set) => ({
    recipes: [],
    setRecipes: () => set((state) => ({ recipes: state })),

    selectedCategory: "",
    setSelectedCategory: (category) => set(() => ({ selectedCategory: category })),
    
    categories: [],
    setCategories: (categories) => set(() => ({ categories })),
    
    favorites: [],
    setFavorites: (favorites) => set(() => ({ favorites })),
}));

export default useRecipesStore;
