import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import CartItem from './CartItem';
import FormatCurrency from './formatCurrency';
import storeItems from '../data/storeItems.json';

const ShoppingCart = ({ isOpen }) => {
  const { cartItems, closeCart } = useShoppingCart();

  const totalAmount = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find((item) => item.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
        <div className="mt-3">
          <strong>Total:</strong> {FormatCurrency(totalAmount)}
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
