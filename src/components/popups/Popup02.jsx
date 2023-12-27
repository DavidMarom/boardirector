'use client'

import React from 'react'
import { Popup, Card01 } from '../index'
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@mui/material';
import { formSchema } from '@/utils/types';
import usePopupStore from '../../store/popup';
import useRecipesStore from '@/store/recipes'

export const Popup02 = () => {
    // const setRecToInject = useRecipesStore((state) => state.setRecToInject);
    const triggerPopup = usePopupStore((state) => state.triggerPopup);
    const setRecipes = useRecipesStore((state) => state.setRecipes);
    const recipes = useRecipesStore((state) => state.recipes);


    const { control, handleSubmit, formState: { errors }, setError } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data) => {
        const idMeal = Math.floor(Math.random() * 1000000) + '';
        const newData = { ...data, idMeal };
        setRecipes([newData, ...recipes]);
        triggerPopup(0);
    }

    return (
        <Popup >
            <Card01 width='600px' height='100vh' direction='column'>
                <div className='row-between'><button onClick={() => { triggerPopup(0) }}>X</button></div>
                <h1>Add a new recipe</h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Image URL:</label>
                    <Controller
                        name="strMealThumb"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <div className='error'>
                                <Input {...field} />
                                <span>{errors.strMealThumb?.message}</span>
                            </div>
                        )}
                    />
                    <br /><br />

                    <label>Recipe Name:</label>
                    <Controller
                        name="strMeal"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <div className='error'>
                                <Input {...field} />
                                <span>{errors.strMeal?.message}</span>
                            </div>
                        )}
                    />
                    <br /><br />

                    <label>Category:</label>
                    <Controller
                        name="strCategory"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <div className='error'>
                                <Input {...field} />
                                <span>{errors.strCategory?.message}</span>
                            </div>
                        )}
                    />
                    <br /><br />

                    <label>Instructions:</label>
                    <Controller
                        name="strInstructions"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <div>
                                <textarea {...field} />
                                <span className='error'>{errors.strInstructions?.message}</span>
                            </div>
                        )}
                    />
                    <br /><br />

                    <Button type="submit">Submit</Button>
                </form>

                <div />
            </Card01>
        </Popup>
    )
}


