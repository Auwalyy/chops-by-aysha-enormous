import React from "react";

const CartPage = ({ cart }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Cart
      </h1>
      {cart.length > 0 ? (
        <div className="flex flex-col gap-8 w-full">
          {cart.map((item, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md p-4 flex justify-between items-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 object-cover rounded-md"
              />
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-lg text-gray-700">{item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;
