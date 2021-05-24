import {addItemToCart, removeItemFromCart} from "./index";

test('removeItemFromCart should remove item from the cart when it is in the cart', () => {
    // arrange
    const shoppingCart = [{
        "id": 4,
        "name": "Summer Chique",
        "description": "Handmade neckless",
        "price": 15,
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/shopbyjamie-f655d.appspot.com/o/WhatsApp%20Image%202021-05-19%20at%2009.45.14.jpeg?alt=media&token=b04900d8-507c-4307-b0e6-3967740fe530",
        qty: 1
    }];
    const product = {
        "id": 4,
        "name": "Summer Chique",
        "description": "Handmade neckless",
        "price": 15,
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/shopbyjamie-f655d.appspot.com/o/WhatsApp%20Image%202021-05-19%20at%2009.45.14.jpeg?alt=media&token=b04900d8-507c-4307-b0e6-3967740fe530",
    }
    // act
    const updatedCartItems = removeItemFromCart(shoppingCart, product);
    // assert
    expect(updatedCartItems).toEqual([])
})


test('removeItemFromCart should change the quantity of an item when it is in the cart', () => {
    // arrange
    const shoppingCart = [{
        "id": 4,
        "name": "Summer Chique",
        "description": "Handmade neckless",
        "price": 15,
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/shopbyjamie-f655d.appspot.com/o/WhatsApp%20Image%202021-05-19%20at%2009.45.14.jpeg?alt=media&token=b04900d8-507c-4307-b0e6-3967740fe530",
        qty: 2
    }];
    const product = {
        "id": 4,
        "name": "Summer Chique",
        "description": "Handmade neckless",
        "price": 15,
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/shopbyjamie-f655d.appspot.com/o/WhatsApp%20Image%202021-05-19%20at%2009.45.14.jpeg?alt=media&token=b04900d8-507c-4307-b0e6-3967740fe530",
    }
    // act
    const updatedCartItems = removeItemFromCart(shoppingCart, product);
    // assert
    expect(updatedCartItems).toEqual([{
        "id": 4,
        "name": "Summer Chique",
        "description": "Handmade neckless",
        "price": 15,
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/shopbyjamie-f655d.appspot.com/o/WhatsApp%20Image%202021-05-19%20at%2009.45.14.jpeg?alt=media&token=b04900d8-507c-4307-b0e6-3967740fe530",
        qty: 1
    }])
})

test('addItemToCart should add item to the cart when it is not already in the cart', () => {
    // arrange
    const shoppingCart = [];
    const product = {
        "id": 4,
        "name": "Summer Chique",
        "description": "Handmade neckless",
        "price": 15,
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/shopbyjamie-f655d.appspot.com/o/WhatsApp%20Image%202021-05-19%20at%2009.45.14.jpeg?alt=media&token=b04900d8-507c-4307-b0e6-3967740fe530"
    }
    // act
    const updatedCartItems = addItemToCart(shoppingCart, product);
    // assert
    expect(updatedCartItems).toEqual([{
        "id": 4,
        "name": "Summer Chique",
        "description": "Handmade neckless",
        "price": 15,
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/shopbyjamie-f655d.appspot.com/o/WhatsApp%20Image%202021-05-19%20at%2009.45.14.jpeg?alt=media&token=b04900d8-507c-4307-b0e6-3967740fe530",
        qty: 1
    }])
})

test('addItemToCart should increase the quantity of the item when it is already in the cart', () => {
    // arrange
    const shoppingCart = [{
        "id": 4,
        "name": "Summer Chique",
        "description": "Handmade neckless",
        "price": 15,
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/shopbyjamie-f655d.appspot.com/o/WhatsApp%20Image%202021-05-19%20at%2009.45.14.jpeg?alt=media&token=b04900d8-507c-4307-b0e6-3967740fe530",
        qty: 1
    }];
    const product = {
        "id": 4,
        "name": "Summer Chique",
        "description": "Handmade neckless",
        "price": 15,
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/shopbyjamie-f655d.appspot.com/o/WhatsApp%20Image%202021-05-19%20at%2009.45.14.jpeg?alt=media&token=b04900d8-507c-4307-b0e6-3967740fe530"
    }
    // act
    const updatedCartItems = addItemToCart(shoppingCart, product);
    // assert
    expect(updatedCartItems).toEqual([{
        "id": 4,
        "name": "Summer Chique",
        "description": "Handmade neckless",
        "price": 15,
        "imageUrl": "https://firebasestorage.googleapis.com/v0/b/shopbyjamie-f655d.appspot.com/o/WhatsApp%20Image%202021-05-19%20at%2009.45.14.jpeg?alt=media&token=b04900d8-507c-4307-b0e6-3967740fe530",
        qty: 2
    }])
})


