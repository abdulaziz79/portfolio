export const useLocalStorage=(key)=>{
    const setItem=(value)=>{
        window.localStorage.setItem(key, JSON.stringify(value))
    }
    const getItem=()=>{
        const item=window.localStorage.getItem(key)
        return item? JSON.parse(item): undefined
    }

    const remove=()=>{
        window.localStorage.removeItem(key)
    }

    return {setItem, getItem,remove}
}

































// export const useLocalStorage=(key)=>{
//     const setItem=(value)=>{
//         window.localStorage.setItem(key, JSON.stringify(value))
//     }

//     const getItem=()=>{
//         const item=window.localStorage.getItem(key)
//         return item?JSON.parse(item):undefined;
//     }

//     const remove=(value)=>{
//         const remove=window.localStorage.removeItem(key)
        
//     }

//     return {setItem, getItem, remove}
// }


