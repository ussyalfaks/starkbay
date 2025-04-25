"use client";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, User, Menu, Heart, Bell, ChevronDown } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface StoreData {
  name: string;
  logo?: string;
  banner?: string;
  description?: string;
  accent?: string;
}

interface BoldTemplateProps {
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
  discount?: number;
}

export const BoldTemplate = ({ storeData, products = [] }: BoldTemplateProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  
  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };
  
  const defaultProducts = [
    {
      id: "1",
      name: "Wireless Earbuds",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Premium sound quality with active noise cancellation",
      rating: 4.8,
      stockCount: 12,
      discount: 15
    },
    {
      id: "2",
      name: "Smart Watch",
      price: 299.99,
      image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Track your fitness and stay connected",
      rating: 4.7,
      stockCount: 18
    },
    {
      id: "3",
      name: "Portable Speaker",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Powerful sound in a compact design",
      rating: 4.5,
      stockCount: 6,
      discount: 10
    },
    {
      id: "4",
      name: "Backpack",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      description: "Stylish and durable backpack for everyday use",
      rating: 4.6,
      stockCount: 24
    }
  ];

  const displayProducts = products.length > 0 ? products : defaultProducts;
  
  // Default accent color is [#0d9488] if not specified
  const accentColor = storeData.accent || '#0d9488';
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <div className="bg-[#0f172a] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <p className="text-sm">Free shipping on orders over $50</p>
          <div className="flex gap-4 text-sm">
            <a href="#" className="hover:text-starkbay-coral">Track Order</a>
            <a href="#" className="hover:text-starkbay-coral">Help</a>
          </div>
        </div>
      </div>
      
      {/* Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              {storeData.logo ? (
                <Image 
                  src={storeData.logo} 
                  alt={storeData.name} 
                  width={40}
                  height={40}
                  className="h-10 w-10 object-contain bg-white rounded-md p-1" 
                />
              ) : (
                <div className="h-10 w-10 rounded-md" style={{ backgroundColor: accentColor }}>
                  <span className="text-white font-bold flex items-center justify-center h-full">
                    {storeData.name ? storeData.name.charAt(0) : 'S'}
                  </span>
                </div>
              )}
              <span className="text-2xl font-bold">{storeData.name || "Bold Store"}</span>
            </div>
            
            <div className="hidden lg:flex items-center space-x-6">
              <div className="group relative">
                <a href="#" className="flex items-center text-[#0f172a] hover:text-[#0d9488]">
                  Shop <ChevronDown className="h-4 w-4 ml-1" />
                </a>
                <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg p-4 w-48 hidden group-hover:block">
                  <ul className="space-y-2">
                    {["New Arrivals", "Best Sellers", "Sale Items", "Collections"].map((item) => (
                      <li key={item}>
                        <a href="#" className="block py-1 text-[#0f172a] hover:text-[#0d9488]">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a href="#" className="text-[#0f172a] hover:text-[#0d9488]">Featured</a>
              <a href="#" className="text-[#0f172a] hover:text-[#0d9488]">Deals</a>
              <a href="#" className="text-[#0f172a] hover:text-[#0d9488]">About</a>
              <a href="#" className="text-[#0f172a] hover:text-[#0d9488]">Contact</a>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="hidden md:flex items-center bg-slate-100 rounded-full pl-4 pr-1 py-1 mr-2">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="bg-transparent border-none focus:outline-none text-sm w-40"
                />
                <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              
              <button className="text-[#0f172a] hover:text-[#0d9488] hidden md:block">
                <Heart className="h-5 w-5" />
              </button>
              
              <button className="text-[#0f172a] hover:text-[#0d9488] relative">
                <ShoppingCart className="h-5 w-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 text-white text-xs h-5 w-5 rounded-full flex items-center justify-center" style={{ backgroundColor: accentColor }}>
                    {cartCount}
                  </span>
                )}
              </button>
              
              <button className="text-[#0f172a] hover:text-[#0d9488] hidden md:block">
                <User className="h-5 w-5" />
              </button>
              
              <button 
                className="text-[#0f172a] hover:text-[#0d9488] lg:hidden"
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
        <div className="lg:hidden bg-white shadow-lg absolute z-40 w-full">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center bg-slate-100 rounded-full pl-4 pr-1 py-1 mb-4">
              <input 
                type="text" 
                placeholder="Search..." 
                className="bg-transparent border-none focus:outline-none text-sm flex-1"
              />
              <Button size="icon" variant="ghost" className="rounded-full h-8 w-8">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-[#0f172a] hover:text-[#0d9488] block py-2 font-medium">Shop</a>
                <ul className="pl-4 mt-1 space-y-2">
                  {["New Arrivals", "Best Sellers", "Sale Items", "Collections"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-[#64748b] hover:text-[#0d9488] block py-1 text-sm">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a href="#" className="text-[#0f172a] hover:text-[#0d9488] block py-2 font-medium">Featured</a>
              </li>
              <li>
                <a href="#" className="text-[#0f172a] hover:text-[#0d9488] block py-2 font-medium">Deals</a>
              </li>
              <li>
                <a href="#" className="text-[#0f172a] hover:text-[#0d9488] block py-2 font-medium">About</a>
              </li>
              <li>
                <a href="#" className="text-[#0f172a] hover:text-[#0d9488] block py-2 font-medium">Contact</a>
              </li>
              <li>
                <a href="#" className="text-[#0f172a] hover:text-[#0d9488] block py-2 font-medium">My Account</a>
              </li>
              <li>
                <a href="#" className="text-[#0f172a] hover:text-[#0d9488] block py-2 font-medium">Wishlist</a>
              </li>
            </ul>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="bg-[#0f172a] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 py-16 md:py-24 flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Discover <span style={{ color: accentColor }}>Amazing</span> Products
              </h1>
              <p className="text-xl opacity-90 mb-8 max-w-lg">
                {storeData.description || "Explore our curated collection of premium products designed to elevate your lifestyle."}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="text-white" style={{ backgroundColor: accentColor }}>
                  Shop Now
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  View Deals
                </Button>
              </div>
            </div>
            <div className="flex-1 relative min-h-[300px] md:min-h-0">
              <Image  
                src={storeData.banner || "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"} 
                alt="Featured Products"
                width={50} height={50}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Categories Chips */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto gap-4 pb-2 scrollbar-hide">
            {["All Products", "New Arrivals", "Best Sellers", "Featured", "On Sale"].map((category) => (
              <Button 
                key={category} 
                variant={category === "All Products" ? "default" : "outline"}
                className={`rounded-full whitespace-nowrap ${category === "All Products" ? "" : "border-gray-300"}`}
                style={category === "All Products" ? { backgroundColor: accentColor } : {}}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-[#64748b]">Our handpicked selection just for you</p>
            </div>
            <a href="#" className="text-sm font-medium hover:underline" style={{ color: accentColor }}>
              View All
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                <div className="relative aspect-square overflow-hidden">
                  <Image 
                    src={product.image} 
                    alt={product.name}
                    width={50} height={50} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                  {product.discount && (
                    <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      {product.discount}% OFF
                    </div>
                  )}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button 
                      size="icon" 
                      variant="secondary" 
                      className="h-8 w-8 rounded-full bg-white shadow-md"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-medium mb-1">{product.name}</h3>
                  <div className="flex gap-2 items-center mb-2">
                    <div className="flex">
                      {Array(5).fill(0).map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}`}
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.rating})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {product.discount ? (
                        <>
                          <span className="text-lg font-semibold" style={{ color: accentColor }}>
                            ${(product.price * (1 - product.discount / 100)).toFixed(2)}
                          </span>
                          <span className="text-sm text-gray-500 line-through">
                            ${product.price.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span className="text-lg font-semibold" style={{ color: accentColor }}>
                          ${product.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <Button 
                      onClick={addToCart}
                      size="sm"
                      className="text-white"
                      style={{ backgroundColor: accentColor }}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-16 bg-[#0f172a]/5">
        <div className="container mx-auto px-4">
          <div className="bg-white overflow-hidden rounded-2xl shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-sm font-semibold mb-2" style={{ color: accentColor }}>Limited Time Offer</span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  20% Off Your First Purchase
                </h2>
                <p className="text-lg text-[#64748b] mb-6">
                  Sign up for our newsletter and get an exclusive discount on your first order.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d9488] focus:border-transparent"
                  />
                  <Button className="text-white" style={{ backgroundColor: accentColor }}>
                    Subscribe
                  </Button>
                </div>
              </div>
              <div className="flex-1 relative min-h-[250px] md:min-h-0">
                <Image 
                  src="https://images.unsplash.com/photo-1607082350899-7e105aa886ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Special offer"
                  width={50} height={50} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah K.",
                review: "The quality of products exceeded my expectations. Shipping was fast and the packaging was excellent.",
                rating: 5,
                date: "2 weeks ago"
              },
              {
                name: "Michael T.",
                review: "Great customer service! Had an issue with my order and they resolved it quickly. Will shop here again.",
                rating: 4,
                date: "1 month ago"
              },
              {
                name: "Jessica L.",
                review: "Love the selection of products. Everything I've purchased has been high quality and exactly as described.",
                rating: 5,
                date: "3 weeks ago"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex gap-1 text-yellow-400 mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.review}&quot;</p>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{testimonial.name}</span>
                  <span className="text-sm text-gray-500">{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                {storeData.logo ? (
                  <Image 
                    src={storeData.logo} 
                    alt={storeData.name} 
                    width={40}
                    height={40}
                    className="h-10 w-10 object-contain bg-white rounded-md p-1" 
                  />
                ) : (
                  <div className="h-10 w-10 rounded-md flex items-center justify-center" style={{ backgroundColor: accentColor }}>
                    <span className="text-white font-bold">
                      {storeData.name ? storeData.name.charAt(0) : 'S'}
                    </span>
                  </div>
                )}
                <span className="text-xl font-bold">{storeData.name || "Bold Store"}</span>
              </div>
              <p className="text-gray-300 mb-4">
                {storeData.description || "Your destination for premium products with exceptional quality and service."}
              </p>
              <div className="flex gap-4">
                {["Facebook", "Twitter", "Instagram", "LinkedIn"].map((platform) => (
                  <a 
                    key={platform} 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-colors"
                    aria-label={platform}
                  >
                    {/* Icon placeholder */}
                    <div className="w-8 h-8 rounded-full flex items-center justify-center border border-gray-600 hover:border-gray-400">
                      <span className="text-xs">{platform.charAt(0)}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                {["All Products", "New Arrivals", "Best Sellers", "Featured", "Sale"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-2">
                {["Contact Us", "FAQ", "Shipping & Returns", "Track Order", "Privacy Policy"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-300 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
              </p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="rounded-lg px-4 py-2 bg-[#0f172a] border border-gray-600 text-white placeholder:text-gray-400 focus:outline-none focus:border-gray-400 flex-1"
                />
                <Button style={{ backgroundColor: accentColor }}>
                  <Bell className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} {storeData.name || "Bold Store"}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Terms & Conditions
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">
                Cookies
              </a>
            </div>
            <p className="text-sm text-gray-400 mt-4 md:mt-0 text-center md:text-right">
              Powered by <span className="font-medium text-[#0d9488]">Starkbay</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BoldTemplate;
