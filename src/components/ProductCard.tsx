
import React, { useState } from 'react';
import { Check, Plus, Minus } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface ProductCardProps {
  id: string;
  type: 'domain' | 'hosting' | 'email';
  name: string;
  subtitle?: string;
  description: string;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  color?: 'blue' | 'green' | 'purple' | 'orange';
  maxQuantity?: number;
  showQuantitySelector?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  type,
  name,
  subtitle,
  description,
  price,
  originalPrice,
  features,
  popular = false,
  color = 'blue',
  maxQuantity = 10,
  showQuantitySelector = false
}) => {
  const [quantity, setQuantity] = useState(1);
  const [years, setYears] = useState(1);
  const { addItem } = useCart();

  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600'
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-AO').format(price) + ',00 Kz';
  };

  const handleAddToCart = () => {
    const finalQuantity = showQuantitySelector ? quantity : 1;
    const finalYears = type === 'domain' || type === 'hosting' ? years : 1;
    
    addItem({
      id: `${id}-${finalQuantity}-${finalYears}`,
      type,
      name: `${name}${subtitle ? ` (${subtitle})` : ''}`,
      price,
      quantity: finalQuantity,
      years: finalYears,
      description: type === 'domain' ? `Registro por ${finalYears} ${finalYears === 1 ? 'ano' : 'anos'}` : description
    });
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg border-[3px] ${
      popular ? 'border-green-500 transform scale-105' : 'border-gray-200'
    } transition-all duration-300 hover:shadow-xl relative overflow-hidden`}>
      
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-green-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            🔥 Mais Popular
          </span>
        </div>
      )}

      {/* Gradient Header */}
      <div className={`bg-gradient-to-r ${colorClasses[color]} p-6 text-white text-center`}>
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        {subtitle && (
          <p className="text-lg opacity-90 mb-2">{subtitle}</p>
        )}
        <p className="opacity-80">{description}</p>
      </div>

      <div className="p-8">
        {/* Pricing */}
        <div className="text-center mb-6">
          {originalPrice && (
            <div className="text-lg text-gray-400 line-through mb-1">
              {formatPrice(originalPrice)}
            </div>
          )}
          <div className="text-4xl font-bold text-petrohost-blue mb-2">
            {formatPrice(price * years * (showQuantitySelector ? quantity : 1))}
          </div>
          <p className="text-sm text-petrohost-textGray">
            {type === 'email' ? `por ${showQuantitySelector ? quantity : 1} ${showQuantitySelector && quantity !== 1 ? 'contas' : 'conta'}` : 'por ano'}
          </p>
        </div>

        {/* Years Selector for Domain/Hosting */}
        {(type === 'domain' || type === 'hosting') && (
          <div className="mb-6">
            <label className="block text-petrohost-darkText font-semibold mb-3">
              Período:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[1, 2, 3].map(year => (
                <button
                  key={year}
                  onClick={() => setYears(year)}
                  className={`p-3 rounded-lg border-[2px] text-center transition-all ${
                    years === year
                      ? 'border-petrohost-blue bg-blue-50 text-petrohost-blue'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="font-bold">{year} {year === 1 ? 'Ano' : 'Anos'}</div>
                  {year > 1 && (
                    <div className="text-xs text-green-600">
                      -{Math.round((1 - (year * 0.85)) * 100)}%
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity Selector for Email */}
        {showQuantitySelector && (
          <div className="mb-6">
            <label className="block text-petrohost-darkText font-semibold mb-3">
              Quantidade de contas:
            </label>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(2, quantity - 1))}
                className="w-10 h-10 bg-petrohost-blue text-white rounded-lg flex items-center justify-center hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={quantity <= 2}
              >
                <Minus size={16} />
              </button>
              <span className="text-2xl font-bold text-petrohost-darkText px-4">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(Math.min(maxQuantity, quantity + 1))}
                className="w-10 h-10 bg-petrohost-blue text-white rounded-lg flex items-center justify-center hover:bg-blue-700"
                disabled={quantity >= maxQuantity}
              >
                <Plus size={16} />
              </button>
            </div>
          </div>
        )}

        {/* Features */}
        <div className="mb-8">
          <h4 className="font-semibold text-petrohost-darkText mb-4">✨ Incluído:</h4>
          <ul className="space-y-2">
            {features.slice(0, 6).map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <Check className="text-green-500 flex-shrink-0" size={18} />
                <span className="text-sm text-petrohost-textGray">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`w-full py-4 px-6 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
            popular
              ? 'bg-green-500 text-white hover:bg-green-600 shadow-lg'
              : 'bg-petrohost-blue text-white hover:bg-blue-700'
          }`}
        >
          🛒 Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
