import React, { useEffect, useState } from 'react'

//Function to get value from local storage
function getSavedValue(key, initialValue) {
    const savedValue = JSON.parse(localStorage.getItem(key))
    if (savedValue) return savedValue

    if (initialValue instanceof Function) return initialValue()
    return initialValue
}

//custom hook for name and subscriber state
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        return getSavedValue(key, initialValue)
    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    })

    return [value, setValue]
}

export default useLocalStorage