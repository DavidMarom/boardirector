export const setToStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getFromStorage = (key: string) => {
    try{
    return JSON.parse(localStorage.getItem(key) as string);
    }
    catch{
        return null;
    }
}

export const dataExpired = () => {
    return Date.now() - parseInt(getFromStorage('lastFetch') ?? "") > 10000
}

export const shortText = (text: string, length: number) => {
    if (!text) return '';
    return text.length > length ? text.substring(0, length) + '...' : text;
}
