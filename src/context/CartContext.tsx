import React, { createContext, useContext, useState, useEffect } from 'react';
import { MenuItem, CartItem } from '../types/restaurant';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CheckoutCustomerDetails {
  name: string;
  phone: string;
  address: string;
  orderType: string; // 'Free Home Delivery' | 'Dine-In' | 'Takeaway'
  notes?: string;
  targetPhone?: string; // '919747362101' | '919747362102'
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, quantity?: number) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  subtotal: number;
  deliveryFee: number;
  grandTotal: number;
  totalItems: number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  checkoutViaWhatsApp: (details: CheckoutCustomerDetails) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('yamama_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('yamama_cart', JSON.stringify(cart));
    } catch {
      // ignore
    }
  }, [cart]);

  const addToCart = (item: MenuItem, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
        );
      }
      return [...prev, { item, quantity }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((i) => {
          if (i.item.id === itemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter((i): i is CartItem => i !== null)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((acc, curr) => acc + curr.quantity, 0);
  const subtotal = cart.reduce((acc, curr) => acc + curr.item.price * curr.quantity, 0);
  const deliveryFee = 0; // Free Home Delivery in Angadipuram & Perinthalmanna!
  const grandTotal = subtotal + deliveryFee;

  const checkoutViaWhatsApp = (details: CheckoutCustomerDetails) => {
    if (cart.length === 0) return;

    const orderNumber = `YS-${Math.floor(1000 + Math.random() * 9000)}`;
    const target = details.targetPhone || RESTAURANT_INFO.whatsappClean;

    let msg = `🍗 *YAMAMA SHAWAYA - NEW ORDER* 🍗\n`;
    msg += `*Order ID:* #${orderNumber}\n`;
    msg += `*Service:* ${details.orderType}\n\n`;
    msg += `📋 *ORDER ITEMS:*\n`;

    cart.forEach((c, index) => {
      msg += `${index + 1}. *${c.item.name}* (x${c.quantity}) — ₹${(c.item.price * c.quantity).toLocaleString('en-IN')}\n`;
      msg += `   └ Portion: ${c.item.portion}\n`;
    });

    msg += `\n💰 *Total Amount:* ₹${grandTotal.toLocaleString('en-IN')} (Free Delivery)\n\n`;
    msg += `👤 *CUSTOMER DETAILS:*\n`;
    msg += `• *Name:* ${details.name}\n`;
    msg += `• *Phone:* ${details.phone}\n`;
    if (details.address) {
      msg += `• *Delivery Address / Landmark:* ${details.address}\n`;
    }
    if (details.notes) {
      msg += `• *Special Instructions:* ${details.notes}\n`;
    }
    msg += `\n📍 Yamama Shawaya, Oradampalam, Calicut Road, Angadipuram\n`;
    msg += `⏰ Placed at: ${new Date().toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' })}`;

    const url = `https://wa.me/${target}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        subtotal,
        deliveryFee,
        grandTotal,
        totalItems,
        isOpen,
        setIsOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        checkoutViaWhatsApp,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
