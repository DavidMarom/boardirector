export const setToStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getFromStorage = (key: string) => {
    try { return JSON.parse(localStorage.getItem(key) as string) }
    catch { return null }
}

export const dataExpired = () => {
    if (!getFromStorage('lastFetch')) {
        console.log("No data in storage");
        return true;

    }
    if (Date.now() - parseInt(getFromStorage('lastFetch')) > 600000) {
        console.log("Data expired");
        return true;
    }
    // return Date.now() - parseInt(getFromStorage('lastFetch') ?? "") > 60000
    console.log("Data not expired");
    return false;
}

export const updateLastFetch = () => {
    setToStorage("lastFetch", Date.now());
}

export const shortText = (text: string, length: number) => {
    if (!text) return '';
    return text.length > length ? text.substring(0, length) + '...' : text;
}
