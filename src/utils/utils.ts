export const setToStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getFromStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) as string);
}

export const dataExpired = () => {
    return Date.now() - parseInt(getFromStorage('lastFetch') ?? "") > 10000
}