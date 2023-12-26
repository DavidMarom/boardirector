import http from '@/services/http';

export function getRecipes() {
    return http.get(`/search.php?f=a`)
        .then((response: any) => { return response.data })
        .catch((error: any) => error)
}

export function getAllCategories() {
    return http.get(`/categories.php`)
        .then((response: any) => { return response.data })
        .catch((error: any) => error)
}
