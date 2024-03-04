// Action creator for incrementing the number
export const incNumber = (num) => {
    return {
        type: "Increment",
        payload : num
    };
}

// Action creator for decrementing the number
export const decNumber = (num) => {
    return {
        type: "Decrement",
        payload : num
    };
}
