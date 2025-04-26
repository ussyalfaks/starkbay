// app/components/templates/minimalistTemplates.tsx
"use client";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface StoreData {
  name: string;
  logo?: string;
  banner?: string;
  description?: string;
}

interface MinimalistTemplateProps {
  storeData: StoreData;
  products: Product[];
}

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  rating: number;
  stockCount: number;
}

export const MinimalistTemplate = ({
  storeData,
  products = [],
}: MinimalistTemplateProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const defaultProducts = [
    {
      id: "1",
      name: "Minimalist Watch",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Sleek and modern watch with a clean design",
      rating: 4.8,
      stockCount: 15,
    },
    {
      id: "2",
      name: "White Ceramic Vase",
      price: 59.99,
      image:
        "https://images.unsplash.com/photo-1612196808214-5b19cbb14325?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Handcrafted ceramic vase, perfect for any home",
      rating: 4.5,
      stockCount: 8,
    },
    {
      id: "3",
      name: "Leather Wallet",
      price: 79.99,
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Premium leather wallet with card slots and coin pocket",
      rating: 4.7,
      stockCount: 12,
    },
    {
      id: "4",
      name: "Wireless Headphones",
      price: 199.99,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "High-quality sound with noise cancellation",
      rating: 4.9,
      stockCount: 5,
    },
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {storeData.logo ? (
                <Image
                  width={50}
                  height={50}
                  src={storeData.logo}
                  alt={storeData.name}
                  className="h-8 w-8 object-contain"
                />
              ) : (
                <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
              )}
              <span className="text-xl font-bold">
                {storeData.name || "Store Name"}
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Home
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Products
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                About
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Contact
              </a>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-gray-800 hover:text-gray-600">
                <Search className="h-5 w-5" />
              </button>
              <button className="text-gray-800 hover:text-gray-600 relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs h-5 w-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
              <button className="text-gray-800 hover:text-gray-600 hidden md:block">
                <User className="h-5 w-5" />
              </button>
              <button
                className="text-gray-800 hover:text-gray-600 md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute z-40 w-full">
          <div className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-600 block py-2"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-600 block py-2"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-600 block py-2"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-600 block py-2"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-800 hover:text-gray-600 block py-2"
                >
                  Account
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Hero/Banner Section */}
      <section
        className="h-96 bg-gray-100 relative flex items-center"
        style={{
          backgroundImage: storeData.banner
            ? `url(${storeData.banner})`
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Welcome to {storeData.name || "Our Store"}
            </h1>
            <p className="text-lg text-white/90 mb-6">
              {storeData.description ||
                "Discover our unique collection of high-quality products."}
            </p>
            <Button className="bg-white hover:bg-gray-100 text-black">
              Shop Now
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden mb-4">
                  <Image
                    width={50}
                    height={50}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
                <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <p className="text-xl font-semibold">
                    ${product.price.toFixed(2)}
                  </p>
                  <Button
                    onClick={addToCart}
                    variant="outline"
                    size="sm"
                    className="hover:bg-black hover:text-white border-black transition-colors"
                  >
                    Add to Cart
                  </Button>
                </div>
                <div className="mt-2 flex items-center">
                  <div className="flex">
                    {Array(5)
                      .fill(0)
                      .map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    ({product.rating})
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Shop by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Electronics",
                image:
                  "https://images.unsplash.com/photo-1550009158-9ebf69173e03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Fashion",
                image:
                  "https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Home Decor",
                image:
                  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
              },
            ].map((category, index) => (
              <div
                key={index}
                className="relative h-64 rounded-lg overflow-hidden group"
              >
                <Image
                  width={50}
                  height={50}
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Stay Updated
              </h2>
              <p className="text-gray-300 mb-6">
                Subscribe to our newsletter for exclusive offers and updates.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0"
                />
                <Button className="bg-white hover:bg-gray-100 text-black px-6">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">About Us</h3>
              <p className="text-sm text-gray-600">
                {storeData.description ||
                  "We're dedicated to providing the best products and shopping experience."}
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Contact Us",
                  "Shipping Policy",
                  "Returns & Exchanges",
                  "FAQs",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-black">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {[
                  "Home",
                  "Products",
                  "About Us",
                  "Terms of Service",
                  "Privacy Policy",
                ].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-600 hover:text-black">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect With Us</h3>
              <div className="flex gap-4">
                {["Facebook", "Instagram", "Twitter"].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-gray-600 hover:text-black text-sm"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} {storeData.name || "Store Name"}
              . All rights reserved.
            </p>
            <p className="text-sm text-gray-600 mt-2 md:mt-0">
              Powered by <span className="font-medium">Starkbay</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MinimalistTemplate;
