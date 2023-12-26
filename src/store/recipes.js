import { create } from "zustand";

const useRecipesStore = create((set) => ({
    recipes: [],
    categories: [],

    setCategories: (categories) => set((state) => ({ categories })),
    setRecipes: () => set((state) => ({ recipes: state })),
}));

// I need to export this for the service
export const { setCategories } = useRecipesStore.getState();

export default useRecipesStore;
