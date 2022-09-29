const addToDb = id => {


    localStorage.removeItem('gym-cart');
    let fitnessCart = {};


    fitnessCart[id] = 1;
    localStorage.setItem('gym-cart', JSON.stringify(fitnessCart));
}

const savedGymCart = () => {

    let cartInfo = {}
    const storedCart = localStorage.getItem('gym-cart');
    if (storedCart) {
        cartInfo = JSON.parse(storedCart);
    }
    return cartInfo;
}
export { addToDb, savedGymCart }