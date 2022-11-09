// TODO: create a component that displays a single bakery item
function BakeryItem(prop) {
    console.log(prop)
    const cart = prop.cart
    const updateCart = prop.setCart
    const item = prop.item
    const total = prop.total
    const updateTotal = prop.setTotal
    

    const handleClick = () => {
        updateCart([...cart, 
        item])
        updateTotal(total + item.price)
    }



    return (
        <div>
            <p>{prop.item.name}</p>
            <p>{prop.item.description}</p>
            <p>{prop.item.price}</p>
            <img src={prop.item.image}></img>
            <button onClick={handleClick}>Add to Cart</button>
        </div>
    )
}

export default BakeryItem;