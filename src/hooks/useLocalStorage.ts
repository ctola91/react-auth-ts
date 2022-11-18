import { useEffect, useState } from 'react';

const getStorageValue = (key: string, initialValue: string) => {
    const saved = localStorage.getItem(key) as string;
    if (saved) {
        return JSON.parse(saved);
    }
    return initialValue;
}

export const useLocalStorage = (key: string, initialValue: string) => {
    const [value, setValue] = useState(() => {
        return getStorageValue(key, initialValue)
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [key, value]);

    return [value, setValue];
}