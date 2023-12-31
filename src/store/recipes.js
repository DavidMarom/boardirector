import { create } from "zustand";

const useRecipesStore = create((set) => ({

    selectedCategory: "",
    setSelectedCategory: (category) => set(() => ({ selectedCategory: category })),
        
    favorites: [],
    setFavorites: (favorites) => set(() => ({ favorites })),

    recipes: [],
    setRecipes: (recipes) => set(() => ({ recipes })),

    recToInject: {},
    setRecToInject: (recToInject) => set(() => ({ recToInject })),
}));

export default useRecipesStore;
