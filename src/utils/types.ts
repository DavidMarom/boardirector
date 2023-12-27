import { z } from 'zod';

const RecipeSchema = z.object({
    idMeal: z.string(),
    strMeal: z.string(),
    strCategory: z.string(),
    strArea: z.string().optional(),
    strInstructions: z.string().optional(),
    strMealThumb: z.string(),
    strTags: z.string().optional(),
    strYoutube: z.string().optional(),
    strIngredient1: z.string().optional(),
    strIngredient2: z.string().optional(),
    strIngredient3: z.string().optional(),
    strIngredient4: z.string().optional(),
    strIngredient5: z.string().optional(),
    strIngredient6: z.string().optional(),
    strIngredient7: z.string().optional(),
    strIngredient8: z.string().optional(),
    strIngredient9: z.string().optional(),
    strIngredient10: z.string().optional(),
    strIngredient11: z.string().optional(),
    strIngredient12: z.string().optional(),
    strIngredient13: z.string().optional(),
    strIngredient14: z.string().optional(),
    strIngredient15: z.string().optional(),
    strIngredient16: z.string().optional(),
    strIngredient17: z.string().optional(),
    strIngredient18: z.string().optional(),
    strIngredient19: z.string().optional(),
    strIngredient20: z.string().optional(),
    strMeasure1: z.string().optional(),
    strMeasure2: z.string().optional(),
    strMeasure3: z.string().optional(),
    strMeasure4: z.string().optional(),
    strMeasure5: z.string().optional(),
    strMeasure6: z.string().optional(),
    strMeasure7: z.string().optional(),
    strMeasure8: z.string().optional(),
    strMeasure9: z.string().optional(),
    strMeasure10: z.string().optional(),
    strMeasure11: z.string().optional(),
    strMeasure12: z.string().optional(),
    strMeasure13: z.string().optional(),
    strMeasure14: z.string().optional(),
    strMeasure15: z.string().optional(),
    strMeasure16: z.string().optional(),
    strMeasure17: z.string().optional(),
    strMeasure18: z.string().optional(),
    strMeasure19: z.string().optional(),
    strMeasure20: z.string().optional(),
    strSource: z.string().optional(),
    dateModified: z.string().optional(),
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

