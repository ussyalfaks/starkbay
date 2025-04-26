"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShoppingBag, Store, BarChart, Star, Shield, Package } from "lucide-react";

const Index = () => {
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-6 w-6 text-[#0d9488]" />
            <span className="text-xl font-bold text-[#0f172a]">Starkbay</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-[#0f172a] hover:text-[#0d9488] transition-colors">Features</a>
            <a href="#templates" className="text-[#0f172a] hover:text-[#0d9488] transition-colors">Templates</a>
            <a href="#pricing" className="text-[#0f172a] hover:text-[#0d9488] transition-colors">Pricing</a>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button className="bg-[#0d9488] hover:bg-[#0d9488]/90" asChild>
              <Link href="/create-store">Get Started</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a]">
                Launch your own <span className="text-[#0d9488]">professional</span> storefront in minutes
              </h1>
              <p className="text-lg text-[#64748b] max-w-xl">
                Starkbay helps creators, entrepreneurs, and businesses set up beautiful online stores with blockchain-powered trust and security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#0d9488] hover:bg-[#0d9488]/90 text-white" asChild>
                  <Link href="/register" className="flex items-center">
                    Create Your Store <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#templates">Explore Templates</a>
                </Button>
              </div>
              <div className="flex items-center gap-2 pt-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                      <Image
                        src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`}
                        alt="User"
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-sm text-[#64748b]">
                  <span className="font-medium">500+</span> vendors launched this month
                </p>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-starkbay-slate-medium">
                <Image
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
                  alt="Starkbay Platform"
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full w-16 h-16 flex items-center justify-center"
                  >
                    <svg className="w-6 h-6 text-[#0d9488] ml-1" viewBox="0 0 24 24">
                      <path fill="currentColor" d="M8 5v14l11-7z" />
                    </svg>
                  </Button>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 hidden md:block">
                <div className="flex items-center gap-3">
                  <BarChart className="h-10 w-10 text-[#0d9488]" />
                  <div>
                    <p className="text-xs text-[#64748b]">Monthly Sales</p>
                    <p className="text-lg font-semibold text-[#0f172a]">+27.4%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">Everything you need to succeed online</h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              Powerful tools to help you build, manage and grow your online business with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Store className="h-10 w-10 text-[#0d9488]" />,
                title: "Custom Storefront",
                description: "Choose from professional templates and customize them to match your brand identity."
              },
              {
                icon: <BarChart className="h-10 w-10 text-[#0d9488]" />,
                title: "Detailed Analytics",
                description: "Track performance with insights on traffic, sales, and customer behavior."
              },
              {
                icon: <Star className="h-10 w-10 text-[#0d9488]" />,
                title: "Review System",
                description: "Build trust with verified customer reviews and ratings for your products."
              },
              {
                icon: <Shield className="h-10 w-10 text-[#0d9488]" />,
                title: "Blockchain Security",
                description: "Leverage Starknet technology for secure transactions and product verification."
              },
              {
                icon: <Package className="h-10 w-10 text-[#0d9488]" />,
                title: "Order Management",
                description: "Efficiently manage orders from receipt to fulfillment with automated updates."
              },
              {
                icon: <ShoppingBag className="h-10 w-10 text-[#0d9488]" />,
                title: "Mobile Optimized",
                description: "Fully responsive design ensures great shopping experience on all devices."
              },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-starkbay-slate-light p-3 rounded-lg w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#0f172a] mb-2">{feature.title}</h3>
                <p className="text-[#64748b]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-20 bg-starkbay-slate-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0f172a] mb-4">Professional Templates</h2>
            <p className="text-lg text-[#64748b] max-w-2xl mx-auto">
              Choose from our beautifully designed templates to create your perfect storefront.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Template 1 - Minimalist */}
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <div className="relative aspect-video bg-gray-100">
                <Image 
                  src="https://images.unsplash.com/photo-1577925595196-61479df4d397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Minimalist Template"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#0f172a]">
                  Minimalist
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0f172a] mb-2">Sleek & Minimal</h3>
                <p className="text-[#64748b] mb-4">
                  A clean, modern design that puts your products front and center with minimal distractions.
                </p>
                <div className="flex gap-2 mb-4">
                  {["#FFFFFF", "#000000", "#F8FAFC", "#E2E8F0"].map((color) => (
                    <div
                      key={color}
                      className="w-6 h-6 rounded-full border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <Button className="w-full bg-[#0f172a] hover:bg-[#0f172a]/90">Preview Template</Button>
              </div>
            </div>
            
            {/* Template 2 - Bold */}
            <div className="rounded-xl overflow-hidden shadow-lg bg-white">
              <div className="relative aspect-video bg-gray-100">
                <Image 
                  src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                  alt="Bold Template"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-sm font-medium text-[#0f172a]">
                  Bold
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#0f172a] mb-2">Bold & Dynamic</h3>
                <p className="text-[#64748b] mb-4">
                  Eye-catching design with vibrant colors and dynamic layouts to make your brand stand out.
                </p>
                <div className="flex gap-2 mb-4">
                  {["#0F172A", "#0D9488", "#F97316", "#6366F1"].map((color) => (
                    <div
                      key={color}
                      className="w-6 h-6 rounded-full border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <Button className="w-full bg-[#0d9488] hover:bg-[#0d9488]/90">Preview Template</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0f172a] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to launch your online store?</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            Join hundreds of vendors already selling on Starkbay and start growing your business today.
          </p>
          <Button size="lg" className="bg-starkbay-coral hover:bg-starkbay-coral/90 text-white" asChild>
            <Link href="/register" className="flex items-center">
              Get Started Free <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShoppingBag className="h-6 w-6 text-[#0d9488]" />
                <span className="text-xl font-bold text-[#0f172a]">Starkbay</span>
              </div>
              <p className="text-sm text-[#64748b]">
                The multi-vendor platform powered by Starknet technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[#0f172a]">Product</h3>
              <ul className="space-y-2 text-sm">
                {["Features", "Templates", "Pricing", "FAQ", "Docs"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#64748b] hover:text-[#0d9488]">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[#0f172a]">Company</h3>
              <ul className="space-y-2 text-sm">
                {["About", "Blog", "Careers", "Press", "Partners"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#64748b] hover:text-[#0d9488]">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-[#0f172a]">Legal</h3>
              <ul className="space-y-2 text-sm">
                {["Terms", "Privacy", "Cookies", "Licenses", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-[#64748b] hover:text-[#0d9488]">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-100 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-[#64748b]">
              &copy; {new Date().getFullYear()} Starkbay. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              {["Twitter", "Discord", "GitHub", "LinkedIn"].map((platform) => (
                <a key={platform} href="#" className="text-[#64748b] hover:text-[#0d9488] text-sm">
                  {platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
