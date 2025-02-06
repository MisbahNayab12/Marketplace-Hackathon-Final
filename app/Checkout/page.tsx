'use client'
import { useState } from 'react';
import React from 'react'
import Image from 'next/image'
import CaretRight from '../../public/CaretRight.png';
import Link from 'next/link';
import { useAppSelector } from '@/redux/features/store';
import Arrow from '../../public/ArrowRight.png'
import { urlFor } from "@/sanity/lib/image";
import { client } from '../../sanity/lib/client';

export default function Checkout() {
    const cartItems = useAppSelector((state) => state.cartReducer);

    const totalAmount = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        emailAddress: '',
        phone: '',
        company: '',
        country: 'Pakistan',
        city: 'Karachi',
        zipCode: '',
        address1: '',
        address2: ''
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePlaceOrder = async () => {
        try {
            const orderData = {
                ...formData,
                cartItems: cartItems.map(item => ({
                    _type: 'reference',
                    _ref: item._id || "",
                    _key: item._id
                })),
                total: totalAmount,
                status: 'pending'
            };
            await client.create({
                _type: 'order',
                ...orderData
            });

            alert('Order placed successfully!');
        } catch (error) {
            console.error('Error placing order:', error);
            alert(' Failed to place order.');
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <div className="bg-hero-image bg-cover bg-center h-80 w-full flex justify-center items-center mt-[30px]">
                <div>
                    <h1 className="text-white font-sans text-5xl font-bold">Checkout Page</h1>
                    <div className="flex justify-center items-center">
                        <h2 className="text-white leading-[56px] text-inter"> Home </h2>
                        <Image src={CaretRight} alt="icon" />
                        <h2 className="text-primary">Checkout</h2>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row md:mx-[200px] p-4 font-sans gap-5 py-24">
                <div>
                    <h1 className="font-bold">Shipping Address</h1>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-7">
                        <div>
                            <h1>First Name</h1>
                            <input type="text" name="firstName" className="border py-2 px-4 w-64 mt-1" onChange={handleChange}/>
                        </div>
                        <div>
                            <h1>Last Name</h1>
                            <input type="text" name="lastName" className="border py-2 px-4 w-64 mt-1" onChange={handleChange} />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-4">
                        <div>
                            <h1>Email Address</h1>
                            <input name="emailAddress" type="text" className="border py-2 px-4 w-64 mt-1" onChange={handleChange}/>
                        </div>
                        <div>
                            <h1>Phone Number</h1>
                            <input type="text" name="phone" className="border py-2 px-4 w-64 mt-1" onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-4">
                        <div>
                            <h1>Company</h1>
                            <input type="text" name="company" className="border py-2 px-4 w-64 mt-1" onChange={handleChange}/>
                        </div>
                        <div>
                            <h1>Country</h1>
                            <select name="country" className="border py-2 px-3 w-64 mt-1 text-gray-500" onChange={handleChange}>
                                <option>Pakistan</option>
                                <option>USA</option>
                                <option>Canada</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-4">
                        <div>
                            <h1>City</h1>
                            <select name="city" className="border py-2 px-3 w-64 mt-1 text-gray-500" onChange={handleChange}>
                                <option>Karachi</option>
                                <option>Lahore</option>
                                <option>Islamabad</option>
                            </select>
                        </div>
                        <div>
                            <h1>Zip code</h1>
                            <input type="text" name="zipCode" className="border py-2 px-4 w-64 mt-1" onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-4">
                        <div>
                            <h1>Address 1</h1>
                            <input type="text" name="address1" className="border py-2 px-4 w-64 mt-1" onChange={handleChange}/>
                        </div>
                        <div>
                            <h1>Address 2</h1>
                            <input type="text" name="address2" className="border py-2 px-4 w-64 mt-1" onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="mt-6 flex flex-col md:flex-row gap-4">
                        <Link href="/ShoppingCart" className="text-center text-black border hover:bg-amber-400 py-2 px-4 md:w-1/2 mt-3 font-sans">
                            <button >Back to Cart</button>
                        </Link>
                        <button className=" bg-primary text-white hover:bg-amber-400 py-2 px-4 md:w-1/2 mt-3 font-sans">Proceed to Shipping</button>
                    </div>
                </div>

                <div className="border md:w-1/2 p-5">
                    <h1 className="font-bold text-lg mb-4 text-center">Your Cart</h1>
                    <div>
                        {cartItems.map((item) => (
                            <div key={item._id} className="flex justify-between items-center mb-4">
                                <div className="flex items-center gap-3">
                                    <Image
                                        src={urlFor(item.image).url()} 
                                        alt="image"
                                        width={50}
                                        height={50}
                                        className="rounded"
                                    />
                                    <div>
                                        <h2 className="text-sm font-bold">{item.name}</h2>
                                        <p className="text-xs text-gray-500">
                                            Quantity: {item.quantity}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm font-bold">${item.price * item.quantity}</p>
                            </div>
                        ))}
                    </div>
                    <div className="border-t pt-4">
                        <div className="flex justify-between">
                            <p>Subtotal</p>
                            <p>${totalAmount.toFixed(2)}</p>
                        </div>
                        <div className="flex justify-between text-gray-500 text-sm mt-2">
                            <p>Shipping</p>
                            <p>Free</p>
                        </div>
                        <div className="flex justify-between text-gray-500 text-sm mt-2">
                            <p>Discount</p>
                            <p>0</p>
                        </div>
                        <div className="flex justify-between text-gray-500 text-sm mt-2">
                            <p>Tax</p>
                            <p>0</p>
                        </div>

                    </div>

                    <div className="border-t pt-4 mt-5">
                        <div className="flex justify-between font-bold mt-2">
                            <p>Total</p>
                            <p>${totalAmount.toFixed(2)}</p>
                        </div>
                    </div>

                    <button onClick={handlePlaceOrder} className="flex justify-center items-center gap-5 bg-primary text-white hover:bg-amber-400 py-2 px-4 w-full mt-3 font-sans">
                        Place an order
                        <Image src={Arrow} alt="icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}
