export const setToStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getFromStorage = (key: string) => {
    return JSON.parse(localStorage.getItem(key) as string);
}

export const dataExpired = () => {
    return Date.now() - parseInt(getFromStorage('lastFetch') ?? "") > 10000
}

export const shortText = (text: string, length: number) => {
    return text.length > length ? text.substring(0, length) + '...' : text;
}
