
import React, { useState } from 'react';
import { ShoppingCart, X, Plus, Minus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Link } from 'react-router-dom';

const FloatingCart = () => {
  const { items, itemCount, total, removeItem, updateQuantity } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  if (itemCount === 0) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-AO').format(price) + ',00 Kz';
  };

  return (
    <>
      {/* Cart Button */}
      <div className="fixed top-24 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-petrohost-blue text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-110"
        >
          <ShoppingCart size={24} />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
              {itemCount}
            </span>
          )}
        </button>
      </div>

      {/* Cart Dropdown */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-20 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-20 right-6 w-96 bg-white rounded-xl shadow-2xl border-[3px] border-petrohost-blue z-50 max-h-96 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-petrohost-darkText">
                  🛒 Carrinho ({itemCount})
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="max-h-64 overflow-y-auto">
              {items.map((item) => (
                <div key={item.id} className="p-4 border-b border-gray-100 hover:bg-gray-50">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h4 className="font-semibold text-petrohost-darkText text-sm">
                        {item.name}
                      </h4>
                      {item.description && (
                        <p className="text-xs text-petrohost-textGray">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 ml-2"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) - 1)}
                        className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="text-sm font-medium px-2">
                        {item.quantity || 1}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                        className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center hover:bg-gray-300"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-petrohost-blue">
                        {formatPrice(item.price * (item.years || 1) * (item.quantity || 1))}
                      </div>
                      {item.years && item.years > 1 && (
                        <div className="text-xs text-petrohost-textGray">
                          {item.years} {item.years === 1 ? 'ano' : 'anos'}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-petrohost-darkText">Total:</span>
                <span className="text-xl font-bold text-petrohost-blue">
                  {formatPrice(total)}
                </span>
              </div>
              <Link
                to="/carrinho-checkout"
                className="w-full bg-green-500 text-white py-3 px-6 rounded-lg font-bold hover:bg-green-600 transition-colors block text-center"
                onClick={() => setIsOpen(false)}
              >
                🚀 Finalizar Compra
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FloatingCart;
