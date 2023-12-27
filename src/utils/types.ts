import { z } from 'zod';

const RecipeSchema = z.object({
    idMeal: z.string(),
    strMeal: z.string(),
    strCategory: z.string(),
    strArea: z.string(),
    strInstructions: z.string(),
    strMealThumb: z.string(),
    strTags: z.string(),
    strYoutube: z.string(),
    strIngredient1: z.string(),
    strIngredient2: z.string(),
    strIngredient3: z.string(),
    strIngredient4: z.string(),
    strIngredient5: z.string(),
    strIngredient6: z.string(),
    strIngredient7: z.string(),
    strIngredient8: z.string(),
    strIngredient9: z.string(),
    strIngredient10: z.string(),
    strIngredient11: z.string(),
    strIngredient12: z.string(),
    strIngredient13: z.string(),
    strIngredient14: z.string(),
    strIngredient15: z.string(),
    strIngredient16: z.string(),
    strIngredient17: z.string(),
    strIngredient18: z.string(),
    strIngredient19: z.string(),
    strIngredient20: z.string(),
    strMeasure1: z.string(),
    strMeasure2: z.string(),
    strMeasure3: z.string(),
    strMeasure4: z.string(),
    strMeasure5: z.string(),
    strMeasure6: z.string(),
    strMeasure7: z.string(),
    strMeasure8: z.string(),
    strMeasure9: z.string(),
    strMeasure10: z.string(),
    strMeasure11: z.string(),
    strMeasure12: z.string(),
    strMeasure13: z.string(),
    strMeasure14: z.string(),
    strMeasure15: z.string(),
    strMeasure16: z.string(),
    strMeasure17: z.string(),
    strMeasure18: z.string(),
    strMeasure19: z.string(),
    strMeasure20: z.string(),
    strSource: z.string(),
    dateModified: z.string(),
});

export type RecipeType = z.infer<typeof RecipeSchema>;

const CategorySchema = z.object({
    idCategory: z.string(),
    strCategory: z.string(),
    strCategoryThumb: z.string(),
    strCategoryDescription: z.string(),
});

export type CategoryType = z.infer<typeof CategorySchema>;

export const formSchema = z.object({
    strMeal: z.string().min(2, { message: 'Recipe name must be at least 2 characters long' }),
    strCategory: z.string().min(2, { message: 'Category name must be at least 2 characters long' }),
    strInstructions: z.string().min(5, { message: 'Instructions must be at least 5 characters long' }),
    strMealThumb: z.string().url({ message: 'Image URL is not valid' }),
});

