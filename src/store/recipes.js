import { create } from "zustand";

const useRecipesStore = create((set) => ({
    recipes: [],
    categories: [],
    favorites: [],
    selectedCategory: "",

    setSelectedCategory: (category) => set((state) => ({ selectedCategory: category })),
    setCategories: (categories) => set((state) => ({ categories })),
    setRecipes: () => set((state) => ({ recipes: state })),
    setFavorites: (favorites) => set((state) => ({ favorites })),
}));

export default useRecipesStore;
