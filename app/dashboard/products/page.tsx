"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart,
  CreditCard,
  Settings,
  LogOut,
  ChevronLeft,
  Menu
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Page = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  
  // Mock store data
  const storeData = {
    name: "Tech Gadgets Store",
    subdomain: "techgadgets",
    logoUrl: "https://randomuser.me/api/portraits/men/32.jpg",
    template: "minimalist"
  };
  
  const navItems = [
    { name: "Dashboard", icon: <LayoutDashboard className="h-5 w-5" />, path: "/dashboard" },
    { name: "Products", icon: <Package className="h-5 w-5" />, path: "/dashboard/products" },
    { name: "Orders", icon: <ShoppingCart className="h-5 w-5" />, path: "/dashboard/orders" },
    { name: "Customers", icon: <Users className="h-5 w-5" />, path: "/dashboard/customers" },
    { name: "Analytics", icon: <BarChart className="h-5 w-5" />, path: "/dashboard/analytics" },
    { name: "Payments", icon: <CreditCard className="h-5 w-5" />, path: "/dashboard/payments" },
    { name: "Settings", icon: <Settings className="h-5 w-5" />, path: "/dashboard/settings" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar for Desktop */}
      <div
        className={`bg-white border-r border-gray-200 fixed inset-y-0 z-10 transition-all duration-200 ease-in-out 
          ${isSidebarCollapsed ? "w-20" : "w-64"} 
          hidden md:flex md:flex-col`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className={`flex items-center ${isSidebarCollapsed ? "justify-center w-full" : "gap-2"}`}>
            {storeData.logoUrl ? (
              <Image width={50} height={50} src={storeData.logoUrl} alt="Logo" className="h-8 w-8 rounded-md object-cover" />
            ) : (
              <div className="h-8 w-8 rounded-md bg-[#0d9488] text-white font-medium flex items-center justify-center">
                {storeData.name.charAt(0)}
              </div>
            )}
            {!isSidebarCollapsed && (
              <span className="font-semibold text-[#0f172a]">
                {storeData.name}
              </span>
            )}
          </div>
          <button
            onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
            className={`text-gray-500 hover:text-[#0f172a] ${isSidebarCollapsed ? "hidden" : "block"}`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex flex-col flex-1 py-4 px-3">
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`flex items-center py-2 px-3 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#0d9488] group transition-colors
                  ${isSidebarCollapsed ? "justify-center" : "gap-3"}`}
              >
                <div className="text-gray-500 group-hover:text-[#0d9488]">{item.icon}</div>
                {!isSidebarCollapsed && <span>{item.name}</span>}
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto border-t border-gray-200 pt-4">
            <a
              href="/dashboard/logout"
              className={`flex items-center py-2 px-3 rounded-md text-gray-700 hover:bg-red-50 hover:text-red-600 group transition-colors
                ${isSidebarCollapsed ? "justify-center" : "gap-3"}`}
            >
              <div className="text-gray-500 group-hover:text-red-600">
                <LogOut className="h-5 w-5" />
              </div>
              {!isSidebarCollapsed && <span>Logout</span>}
            </a>
          </div>
        </div>
      </div>
      
      {/* Mobile Sidebar Overlay */}
      {isMobileSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setIsMobileSidebarOpen(false)}
        ></div>
      )}
      
      {/* Mobile Sidebar */}
      <div
        className={`bg-white border-r border-gray-200 fixed inset-y-0 left-0 z-30 transition-transform duration-200 ease-in-out w-64 transform
          ${isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            {storeData.logoUrl ? (
              <Image width={50} height={50} src={storeData.logoUrl} alt="Logo" className="h-8 w-8 rounded-md object-cover" />
            ) : (
              <div className="h-8 w-8 rounded-md bg-[#0d9488] text-white font-medium flex items-center justify-center">
                {storeData.name.charAt(0)}
              </div>
            )}
            <span className="font-semibold text-[#0f172a]">
              {storeData.name}
            </span>
          </div>
          <button
            onClick={() => setIsMobileSidebarOpen(false)}
            className="text-gray-500 hover:text-[#0f172a]"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>
        
        <div className="flex flex-col flex-1 py-4 px-3">
          <nav className="flex-1 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="flex items-center gap-3 py-2 px-3 rounded-md text-gray-700 hover:bg-gray-100 hover:text-[#0d9488] group transition-colors"
                onClick={() => setIsMobileSidebarOpen(false)}
              >
                <div className="text-gray-500 group-hover:text-[#0d9488]">{item.icon}</div>
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>
          
          <div className="mt-auto border-t border-gray-200 pt-4">
            <a
              href="/dashboard/logout"
              className="flex items-center gap-3 py-2 px-3 rounded-md text-gray-700 hover:bg-red-50 hover:text-red-600 group transition-colors"
            >
              <div className="text-gray-500 group-hover:text-red-600">
                <LogOut className="h-5 w-5" />
              </div>
              <span>Logout</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className={`flex-1 overflow-auto ${isSidebarCollapsed ? "md:ml-20" : "md:ml-64"} transition-all duration-200 ease-in-out`}>
        {/* Header */}
        <header className="bg-white shadow-sm h-16 flex items-center px-4 sticky top-0 z-10">
          <div className="flex-1 flex">
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="text-gray-500 hover:text-[#0f172a] md:hidden"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="ml-4 md:ml-0">
              <h1 className="text-lg font-semibold text-[#0f172a]">Dashboard</h1>
              <p className="text-sm text-gray-500">
                {storeData.subdomain}.starkbay.com
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button size="sm" variant="outline" className="hidden md:flex">
              View Storefront
            </Button>
            <Button size="sm" className="bg-[#0d9488] hover:bg-[#0d9488]/90">
              + Add Product
            </Button>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: "Total Sales", value: "$12,426.75", change: "+32.40%" },
              { title: "Orders", value: "356", change: "+12.05%" },
              { title: "Customers", value: "248", change: "+25.00%" },
              { title: "Avg. Order Value", value: "$34.91", change: "-0.08%" },
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex justify-between">
                  <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                  <span
                    className={`text-xs font-medium ${
                      stat.change.startsWith("+") ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <p className="mt-2 text-2xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
          
          {/* Main Dashboard Content - Placeholder for different dashboard views */}
          
          {/* Fallback content when no sub-route is loaded */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Order ID
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { id: "#ORD-71252", customer: "Emily Johnson", date: "Apr 21, 2023", status: "Completed", amount: "$126.36" },
                      { id: "#ORD-71251", customer: "Michael Chen", date: "Apr 20, 2023", status: "Processing", amount: "$89.95" },
                      { id: "#ORD-71250", customer: "Sarah Williams", date: "Apr 20, 2023", status: "Shipped", amount: "$212.42" },
                      { id: "#ORD-71249", customer: "David Rodriguez", date: "Apr 19, 2023", status: "Completed", amount: "$45.90" },
                      { id: "#ORD-71248", customer: "Jessica Brown", date: "Apr 18, 2023", status: "Canceled", amount: "$116.34" },
                    ].map((order, index) => (
                      <tr key={index}>
                        <td className="px-4 py-3 whitespace-nowrap text-sm font-medium text-[#0f172a]">
                          {order.id}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                          {order.customer}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                          {order.date}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm">
                          <span
                            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                              order.status === "Completed"
                                ? "bg-green-100 text-green-800"
                                : order.status === "Processing"
                                ? "bg-blue-100 text-blue-800"
                                : order.status === "Shipped"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-700">
                          {order.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 flex justify-center">
                <Button variant="outline" size="sm">
                  View All Orders
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold mb-4">Top Products</h2>
              <div className="space-y-4">
                {[
                  { name: "Wireless Headphones", sold: 187, amount: "$8,426.25" },
                  { name: "Smart Watch X4", sold: 124, amount: "$5,782.00" },
                  { name: "Bluetooth Speaker", sold: 96, amount: "$2,880.00" },
                  { name: "USB-C Cable (3-Pack)", sold: 89, amount: "$1,335.00" },
                ].map((product, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-12 h-12 bg-gray-100 rounded-md flex-shrink-0"></div>
                    <div className="ml-4 flex-1">
                      <h3 className="text-sm font-medium">{product.name}</h3>
                      <p className="text-xs text-gray-500">{product.sold} sold</p>
                    </div>
                    <div className="text-sm font-medium">{product.amount}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex justify-center">
                <Button variant="outline" size="sm">
                  View All Products
                </Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Page;
