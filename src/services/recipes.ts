import http from '@/services/http';

export function getRecipes() {
    return http.get(`/search.php?f=a`)
        .then((response: any) => { return response.data })
        .catch((error: any) => error)
}
