import './CheckoutPage.css'
import {set, useForm} from 'react-hook-form';
import {useState} from 'react';
import {useCart} from "../Helper/ShoppingCartContext";
import app from '../module/Firebase.js';

const db = app.firestore();

function CheckoutPage() {
    const {register, handleSubmit, formState: {errors}, watch} = useForm();
    const {cartItems, setCartItems, totalPrice, itemsPrice, shippingPrice} = useCart();


    const onSubmit = data => {
        console.log(data)
        db.collection('orders').add({
            shippingInfo: data,
            order: cartItems,
            totalPrice: totalPrice,
            itemsPrice: itemsPrice,
            shippingPrice: shippingPrice,
            paid: false,
            shipped: false
        })
            .then(() => {
                alert('Your order is completed')
            })
            .catch(error => {
                alert(error.message)
            })

    }

    const watchBillingAddress = watch("billingAddress", false);

    console.log(errors)

    return (
        <>
            <h1>Check Out</h1>

            <div className="cart__row">
                <div>Items Price</div>
                <div className="cart__row_right">€{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="cart__row">
                <div>Shipping Price</div>
                <div className="cart__row_right">€{shippingPrice.toFixed(2)}</div>
            </div>
            <div className="cart__row">
                <div><strong>Total Price</strong></div>
                <div className="cart__row_right"><strong>€{totalPrice.toFixed(2)}</strong></div>
            </div>

            <h2>Delivery Address</h2>

            <div className="cart__form">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor="email">Email address
                        <input type="email"
                               name="email"
                            // value={email}
                            // onChange={(e) => setEmail(e.target.value)}
                               id="email"
                               {...register('email', {
                                   required: true,
                                   pattern: {
                                       value: /\S+@\S+\.\S+/,
                                       message: "Please enter an email address"
                                   }
                               })}
                        />
                        {errors.email && <p className="error"> {errors.email.message}</p>}
                    </label>
                    <label htmlFor="firstName">First name
                        <input type="text"
                               name="firstName"
                            // value={firstName}
                            // onChange={(e) => setFirstName(e.target.value)}
                               id="firstName"
                               {...register('firstName', {
                                   required: {value: true, message: "This field is required"},
                                   maxLength: {value: 20, message: "Your first name is too long"}
                               })}
                        />
                        {errors.firstName && <p className="error">{errors.firstName.message}</p>}
                    </label>
                    <label htmlFor="lastName">Last name
                        <input type="text"
                               name="lastName"
                               id="lastName"
                               {...register('lastName', {
                                   required: {value: true, message: "This field is required"},
                                   maxLength: {value: 20, message: "Your last name is too long"}
                               })}
                        />
                        {errors.lastName && <p className="error">{errors.lastName.message}</p>}
                    </label>
                    <label htmlFor="phoneNumber">Phone number
                        <input type="text"
                               name="phoneNumber"
                               id="phoneNumber"
                               {...register('phoneNumber', {
                                   required: true,
                                   message: "This field is required",
                                   pattern: {
                                       value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/,
                                       message: "Please enter a phone number"
                                   },
                                   maxLength: {
                                       value: 10,
                                       message: "Your phone number is too long"
                                   },
                                   minLength: {
                                       value: 10, message: "Your phone number is too short"
                                   }
                               })}
                        />
                        {errors.phoneNumber && <p className="error">{errors.phoneNumber.message}</p>}
                    </label>

                    <h3><strong>Fill in your delivery address</strong></h3>
                    <label htmlFor="address">Postal code
                        <input type="text"
                               name="postalCode"
                               id="postalCode"
                               {...register('postalCode', {
                                   required: true,
                                   message: "This field is required",
                                   pattern: {
                                       value: /^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i,
                                       message: "Please enter a postal code"
                                   },
                                   maxLength: {
                                       value: 6,
                                       message: "Your postal code is too long"
                                   },
                                   minLength: {
                                       value: 6, message: "Your postal code is incorrect"
                                   }
                               })}
                        />
                        {errors.postalCode && <p className="error">{errors.postalCode.message}</p>}
                    </label>
                    <label htmlFor="houseNumber">House number
                        <input type="text"
                               name="houseNumber"
                               id="houseNumber"
                               {...register('houseNumber', {
                                   required: true,
                                   message: "This field is required",
                                   pattern: {
                                       value: /(?!0)\d[0-3]{0,2}[a-zA-Z]?\/(?!0)\d[0-9]{0,1}/,
                                       message: "Please enter a house number"
                                   }
                               })}
                        />
                        {errors.houseNumber && <p className="error">{errors.houseNumber.message}</p>}
                    </label>
                    <label htmlFor="streetName">Street name
                        <input type="text"
                               name="streetName"
                               id="streetName"
                               {...register('streetName', {required: true, message: "Please enter a street name"})}
                        />
                        {errors.streetName && <p className="error">{errors.streetName.message}</p>}
                    </label>
                    <label htmlFor="cityName">City
                        <input type="text"
                               name="cityName"
                               id="cityName"
                               {...register('city', {required: true, message: "Please enter a city name"})}
                        />
                        {errors.cityName && <p className="error">{errors.cityName.message}</p>}
                    </label>
                    <h3>Billing address</h3>
                    <label htmlFor="checkbox">Same as Delivery address
                        <input type="checkbox"
                               name="checkbox"
                               {...register("billingAddress")}
                        />
                    </label>
                    {!watchBillingAddress && (
                        <>
                            <label htmlFor="billingPostalCode">Postal code
                                <input type="text"
                                       name="billingPostalCode"
                                       id="billingPostalCode"
                                       {...register('billingPostalCode', {
                                           required: true,
                                           message: "This field is required",
                                           pattern: {
                                               value: /^(?:NL-)?(\d{4})\s*([A-Z]{2})$/i,
                                               message: "Please enter a postal code"
                                           },
                                           maxLength: {
                                               value: 6,
                                               message: "Your postal code is too long"
                                           },
                                           minLength: {
                                               value: 6, message: "Your postal code is incorrect"
                                           }
                                       })}
                                />
                                {errors.postalCode && <p className="error">{errors.postalCode.message}</p>}
                            </label>
                            <label htmlFor="billingHouseNumber">House number
                                <input type="text"
                                       name="billingHouseNumber"
                                       id="billingHouseNumber"
                                       {...register('billingHouseNumber', {
                                           required: true,
                                           message: "This field is required",
                                           pattern: {
                                               value: /(?!0)\d[0-3]{0,2}[a-zA-Z]?\/(?!0)\d[0-9]{0,1}/,
                                               message: "Please enter a house number"
                                           }
                                       })}
                                />
                                {errors.houseNumber && <p className="error">{errors.houseNumber.message}</p>}
                            </label>
                            <label htmlFor="billingStreetName">Street name
                                <input type="text"
                                       name="billingStreetName"
                                       id="billingStreetName"
                                       {...register('billingStreetName', {
                                           required: true,
                                           message: "Please enter a street name"
                                       })}
                                />
                                {errors.streetName && <p className="error">{errors.streetName.message}</p>}
                            </label>
                            <label htmlFor="billingCityName">City
                                <input type="text"
                                       name="billingCityName"
                                       id="billingCityName"
                                       {...register('billingCityName', {
                                           required: true,
                                           message: "Please enter a city name"
                                       })}
                                />
                                {errors.cityName && <p className="error">{errors.cityName.message}</p>}
                            </label>
                        </>

                    )

                    }

                    <button onChange={onSubmit}>Confirm order</button>

                </form>
            </div>
        </>
    )
};


export default CheckoutPage;
