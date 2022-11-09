import { useEffect, useState } from 'react';

const getStorageValue = (key: string, defaultValue: string) => {
    const saved = localStorage.getItem(key);
    if (saved) {
        return JSON.parse(saved);
    }
    return defaultValue;
}

export const useLocalStorage = (key: string, defaultValue: string) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, defaultValue)
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]);

    return [value, setValue];
}