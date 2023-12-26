import { create } from "zustand";

const useRecipesStore = create((set) => ({
    recipes: [],
    setRecipes: () => set((state) => ({ recipes: state })),

    selectedCategory: "",
    setSelectedCategory: (category) => set((state) => ({ selectedCategory: category })),
    
    categories: [],
    setCategories: (categories) => set((state) => ({ categories })),
    
    favorites: [234,324],
    setFavorites: (favorites) => set((state) => ({ favorites })),
}));

export default useRecipesStore;
