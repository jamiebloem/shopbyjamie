import './CheckoutPage.css'
import {useForm} from 'react-hook-form';
import {useState} from 'react';

function CheckoutPage() {
    const {register, handleSubmit, formState: {errors}, watch} = useForm();
    const onSubmit = data => console.log(data);
    const watchBillingAddress = watch("billingAddress", false);

    console.log(errors)

    return (
        <>
            <h1>Check Out</h1>
            <h2>Delivery Address</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="email">E-mail address
                    <input type="email"
                           name="email"
                           id="email"
                           {...register('email', {
                               required: true,
                               pattern: {
                                   value: /\S+@\S+\.\S+/,
                                   message: "Please enter an email address"
                               }
                           })}
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </label>
                <label htmlFor="firstName">First name
                    <input type="text"
                           name="firstName"
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
                    {errors.lastName && <p>{errors.lastName.message}</p>}
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
                    {errors.phoneNumber && <p>{errors.phoneNumber.message}</p>}
                </label>

                <p><strong>Fill in your delivery address</strong></p>
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
                    {errors.postalCode && <p>{errors.postalCode.message}</p>}
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
                    {errors.houseNumber && <p>{errors.houseNumber.message}</p>}
                </label>
                <label htmlFor="streetName">Street name
                    <input type="text"
                           name="streetName"
                           id="streetName"
                           {...register('streetName', {required: true, message: "Please enter a street name"})}
                    />
                    {errors.streetName && <p>{errors.streetName.message}</p>}
                </label>
                <label htmlFor="cityName">City
                    <input type="text"
                           name="cityName"
                           id="cityName"
                           {...register('city', {required: true, message: "Please enter a city name"})}
                    />
                    {errors.cityName && <p>{errors.cityName.message}</p>}
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
                            {errors.postalCode && <p>{errors.postalCode.message}</p>}
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
                            {errors.houseNumber && <p>{errors.houseNumber.message}</p>}
                        </label>
                        <label htmlFor="billingStreetName">Street name
                            <input type="text"
                                   name="billingStreetName"
                                   id="billingStreetName"
                                   {...register('billingStreetName', {required: true, message: "Please enter a street name"})}
                            />
                            {errors.streetName && <p>{errors.streetName.message}</p>}
                        </label>
                        <label htmlFor="billingCityName">City
                            <input type="text"
                                   name="billingCityName"
                                   id="billingCityName"
                                   {...register('billingCityName', {required: true, message: "Please enter a city name"})}
                            />
                            {errors.cityName && <p>{errors.cityName.message}</p>}
                        </label>
                    </>

                )

                }


                <input type="submit" text="submit"/>
            </form>

            {/*<form onSubmit={handleSubmit(onSubmit)}>*/
            }
            {/*    */
            }
            {/*    <label htmlFor="checkbox">Same as Delivery address*/
            }
            {/*        <input type="checkbox"*/
            }
            {/*               value="false"*/
            }
            {/*               name="checkbox"*/
            }
            {/*               onChange={() => setCheck(!check)}/>*/
            }
            {/*    </label>*/
            }

            {/*    <label htmlFor="firstName">First name*/
            }
            {/*        <input type="text"*/
            }
            {/*               name="firstName"*/
            }
            {/*               id="firstName"*/
            }
            {/*               {...register('firstName', {required: true, maxLength: 20})}*/
            }
            {/*        />*/
            }
            {/*    </label>*/
            }
            {/*    <label htmlFor="lastName">Last name*/
            }
            {/*        <input type="text"*/
            }
            {/*               name="lastName"*/
            }
            {/*               id="lastName"*/
            }
            {/*               {...register('lastName', {required: true, maxLength: 20})}*/
            }
            {/*        />*/
            }
            {/*    </label>*/
            }
            {/*    <label htmlFor="phoneNumber">Phone number*/
            }
            {/*        <input type="number"*/
            }
            {/*               name="phoneNumber"*/
            }
            {/*               id="phoneNumber"*/
            }
            {/*               {...register('phoneNumber', {required: true, valueAsNumber: true})}*/
            }
            {/*        />*/
            }
            {/*    </label>*/
            }
            {/*    <label htmlFor="address">Billing Address*/
            }
            {/*        <input type="text"*/
            }
            {/*               name="billingAdress"*/
            }
            {/*               id="billingAdress"*/
            }
            {/*               {...register('billingAddress', {required: true})}*/
            }
            {/*        />*/
            }
            {/*    </label>*/
            }
            {/*    <input type="submit"/>*/
            }
            {/*</form>*/
            }
        </>
    )
};


export default CheckoutPage;
