const choice = (items)=>{
    return items[Math.floor(Math.random() * items.length)]
}

const remove = (items, item) =>{
    const matchingItems = items.map(i =>{
        return (i === item) ? item : undefined
    })
    return matchingItems
}

export {choice, remove}