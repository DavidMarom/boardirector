import http from '@/services/http';

export function getAllRecipes() {
    const all = Promise.all([
        http.get(`/search.php?f=a`),
        http.get(`/search.php?f=b`),
        http.get(`/search.php?f=c`),
        http.get(`/search.php?f=d`),
        http.get(`/search.php?f=e`),
        http.get(`/search.php?f=f`),
        http.get(`/search.php?f=g`),
        http.get(`/search.php?f=h`),
        http.get(`/search.php?f=i`),
        http.get(`/search.php?f=j`),
        http.get(`/search.php?f=k`),
        http.get(`/search.php?f=l`),
        http.get(`/search.php?f=m`),
        http.get(`/search.php?f=n`),
        http.get(`/search.php?f=o`),
        http.get(`/search.php?f=p`),
        http.get(`/search.php?f=q`),
        http.get(`/search.php?f=r`),
        http.get(`/search.php?f=s`),
        http.get(`/search.php?f=t`),
        http.get(`/search.php?f=u`),
        http.get(`/search.php?f=v`),
        http.get(`/search.php?f=w`),
        http.get(`/search.php?f=x`),
        http.get(`/search.php?f=y`),
        http.get(`/search.php?f=z`),
    ]);
    return all.then((response: any) => response.map((item: any) => item.data.meals).flat())
        .catch((error: any) => error)
}

export function getAllCategories() {
    return http.get(`/categories.php`)
        .then((response: any) => { return response.data })
        .catch((error: any) => error)
}

export function getRecipesByCategory(category: string) {
    return http.get(`/filter.php?c=${category}`).then((response: any) => response.data.meals.map((item: any) => item.idMeal)
    )
}

