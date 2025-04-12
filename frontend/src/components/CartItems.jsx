import React, { useContext } from 'react';
import { ShopContext } from "../context/ShopContext";
import { TbTrash } from 'react-icons/tb';

const CartItems = () => {
  const {getTotalCartAmount,all_products, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <section className="max_padd-container pt-28">
      <table className="w-full mx-auto border-collapse">
        {/* Table Header */}
        <thead>
          <tr className="bg-slate-900/10 regular-18 sm:regular-22 text-start py-12">
            <th className="p-2">Title</th>
            <th className="p-2">Product</th>
            <th className="p-2">Price</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Total</th>
            <th className="p-2">Remove</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {all_products?.map((product) => {
            if (cartItems[product.id] > 0) {
              return (
                <tr key={product.id} className="border-b border-slate-900/20 text-center">
                  {/* Product Title */}

                  <td className="flex flex-col items-center gap-2 py-2">
                    <img
                      src={product.image}
                      alt="Product"
                      height={60}
                      width={60}
                      className="rounded-lg ring-1 ring-slate-900/5"
                    />
                  </td>
                  <td className="font-semibold text-lg">{product.name}</td>

                  {/* Product Image (Below Name) */}
                  

                  {/* Price */}
                  <td className="text-gray-700">${product.new_price}</td>

                  {/* Quantity */}
                  <td className="w-16 h-16  bg-white border ">
                    {cartItems[product.id]}
                  </td>

                  {/* Total Price */}
                  <td className="text-gray-700 font-medium">
                    ${(product.new_price * cartItems[product.id]).toFixed(2)}
                  </td>

                  {/* Remove Button */}
                  <td>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="text-black-500 hover:text-red-700 text-xl"
                    >
                      <TbTrash />
                    </button>
                  </td>
                </tr>
              );
            }
            return null;
          })}
        </tbody>
      </table>

      <div className='flex flex-col gap-20 my-16 p-8 md:flex-row rounded-md bg-white w-full max-w-[666px]'>
        <div className='flex flex-col gap-10'>
          <h4 className='bold-20'>Summary</h4>
          <div>
            <div className='flexBetween  py-4'>
              <h4 className='medium-16'>Subtotal</h4>
              <h4 className='text-gray-30 font-semibold'>${getTotalCartAmount()}</h4>
            </div>
            <hr />
            <div className='flexBetween py-4'>
              <h4 className='medium-16'>Shipping Free:</h4>
              <h4 className='text-gray-30 font-semibold'>Free</h4>
            </div>
            <hr />
            <div className='flexBetween py-4'>
              <h4  className='bold-18'>Total:</h4>
              <h4 className='bold-18'>${getTotalCartAmount()}</h4>
            </div>
           
          </div>
          <button className='btn_dark_rounded w-44'>Checkout</button>
          <div className='flex-flex-col gap-20'>
            <h4 className='bold-20 capitalize'>Your coupon code enter here:</h4>
            <div className='flexBetween pl-5 h-12 bg-primary rounded-full ring-1 ring-slate-900/10'>
              <input type="text " placeholder='Coupon code' className='bg-transparent border-none outline-none'/>
              <button className='btn_dark_rounded'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartItems;
