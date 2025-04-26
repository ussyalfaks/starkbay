"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Upload, Check } from "lucide-react";
import MinimalistTemplate from "@/components/templates/MinimalistTemplate";
import BoldTemplate from "@/components/templates/BoldTemplate";

const CreateStore = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedTemplate, setSelectedTemplate] = useState<"minimalist" | "bold" | null>(null);
  const [storeData, setStoreData] = useState({
    name: "",
    subdomain: "",
    description: "",
    logo: null,
  });

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleStoreInfoChange = (field: string, value: string) => {
    setStoreData({
      ...storeData,
      [field]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Store data:", storeData, "Template:", selectedTemplate);
    window.location.href = "/dashboard";
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center mb-8">
          <Link href="/" className="flex items-center gap-2 mr-8">
            <ArrowLeft className="h-5 w-5 text-gray-500" />
            <span className="text-gray-600">Back to Home</span>
          </Link>
          <h1 className="text-2xl font-bold text-[#0f172a]">Create Your Starkbay Store</h1>
        </div>
        
        <div className="flex justify-center mb-8">
          <ol className="flex items-center w-full max-w-3xl">
            {[
              { step: 1, title: "Store Info" },
              { step: 2, title: "Choose Template" },
              { step: 3, title: "Confirmation" }
            ].map((item) => (
              <li key={item.step} className={`flex items-center ${item.step !== 3 ? "w-full" : ""}`}>
                <div className="flex items-center">
                  <div 
                    className={`flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                      currentStep >= item.step 
                        ? "border-[#0d9488] bg-[#0d9488] text-white" 
                        : "border-gray-300 bg-white text-gray-500"
                    }`}
                  >
                    {currentStep > item.step ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <span>{item.step}</span>
                    )}
                  </div>
                  <span 
                    className={`ml-2 text-sm font-medium ${
                      currentStep >= item.step ? "text-[#0f172a]" : "text-gray-500"
                    }`}
                  >
                    {item.title}
                  </span>
                </div>
                {item.step !== 3 && (
                  <div 
                    className={`w-full h-0.5 mx-4 ${
                      currentStep > item.step ? "bg-[#0d9488]" : "bg-gray-300"
                    }`}
                  ></div>
                )}
              </li>
            ))}
          </ol>
        </div>
        
        <div className="mb-8">
          {currentStep === 1 && (
            <Card className="max-w-3xl mx-auto shadow-md">
              <CardHeader>
                <CardTitle>Store Information</CardTitle>
                <CardDescription>
                  Enter the basic details of your online store
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="store-name">Store Name *</Label>
                    <Input 
                      id="store-name" 
                      placeholder="e.g., Tech Gadgets Shop" 
                      value={storeData.name}
                      onChange={(e) => handleStoreInfoChange("name", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subdomain">Subdomain *</Label>
                    <div className="flex">
                      <Input 
                        id="subdomain" 
                        placeholder="mystore" 
                        className="rounded-r-none"
                        value={storeData.subdomain}
                        onChange={(e) => handleStoreInfoChange("subdomain", e.target.value)}
                        required
                      />
                      <span className="inline-flex items-center px-3 bg-gray-100 text-gray-600 border border-l-0 border-gray-300 rounded-r-md">
                        .starkbay.com
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      This will be your store&apos;s URL. You can connect a custom domain later.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Store Description</Label>
                    <Textarea 
                      id="description" 
                      placeholder="Describe what your store is about..." 
                      rows={4}
                      value={storeData.description}
                      onChange={(e) => handleStoreInfoChange("description", e.target.value)}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Store Logo</Label>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50">
                        {storeData.logo ? (
                          <Image
                          width={80}
                          height={80} 
                            src="https://via.placeholder.com/80" 
                            alt="Logo Preview" 
                            className="w-full h-full object-cover rounded-lg"
                          />
                        ) : (
                          <Upload className="h-8 w-8 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <Button type="button" variant="outline" size="sm">
                          Upload Logo
                        </Button>
                        <p className="mt-2 text-xs text-gray-500">
                          Recommended size: 512x512px. Max size: 2MB.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button
                  onClick={handleNext}
                  disabled={!storeData.name || !storeData.subdomain}
                >
                  Continue <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          )}
          
          {currentStep === 2 && (
            <div className="max-w-5xl mx-auto">
              <Card className="mb-6 shadow-md">
                <CardHeader>
                  <CardTitle>Choose a Template</CardTitle>
                  <CardDescription>
                    Select a template for your store. You can customize it later.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link 
                      href="/preview/minimalist"
                      target="_blank"
                      className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${
                        selectedTemplate === "minimalist" 
                          ? "border-[#0d9488] ring-2 ring-[#0d9488]/20" 
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open('/preview/minimalist', '_blank');
                        setSelectedTemplate("minimalist");
                      }}
                    >
                      <div className="aspect-video bg-gray-100 relative">
                        <Image
                        width={80}
                        height={80} 
                          src="https://images.unsplash.com/photo-1577925595196-61479df4d397?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                          alt="Minimalist Template"
                          className="w-full h-full object-cover"
                        />
                        {selectedTemplate === "minimalist" && (
                          <div className="absolute top-3 right-3 bg-[#0d9488] text-white p-1 rounded-full">
                            <Check className="h-5 w-5" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-1">Minimalist</h3>
                        <p className="text-sm text-gray-600">
                          Clean and elegant design that puts your products front and center.
                        </p>
                      </div>
                    </Link>
                    
                    <Link 
                      href="/preview/bold"
                      target="_blank"
                      className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${
                        selectedTemplate === "bold" 
                          ? "border-[#0d9488] ring-2 ring-[#0d9488]/20" 
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        window.open('/preview/bold', '_blank');
                        setSelectedTemplate("bold");
                      }}
                    >
                      <div className="aspect-video bg-gray-100 relative">
                        <Image
                        width={80}
                        height={80} 
                          src="https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                          alt="Bold Template"
                          className="w-full h-full object-cover"
                        />
                        {selectedTemplate === "bold" && (
                          <div className="absolute top-3 right-3 bg-[#0d9488] text-white p-1 rounded-full">
                            <Check className="h-5 w-5" />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold mb-1">Bold</h3>
                        <p className="text-sm text-gray-600">
                          Eye-catching and vibrant design to make your brand stand out.
                        </p>
                      </div>
                    </Link>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handleBack}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back
                  </Button>
                  <Button
                    onClick={handleNext}
                    disabled={!selectedTemplate}
                  >
                    Continue <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
              
              {selectedTemplate && (
                <div className="border rounded-xl overflow-hidden shadow-md">
                  <div className="bg-white p-4 border-b">
                    <Tabs defaultValue="desktop">
                      <div className="flex justify-between items-center">
                        <h3 className="font-semibold">Preview</h3>
                        <TabsList>
                          <TabsTrigger value="desktop">Desktop</TabsTrigger>
                          <TabsTrigger value="mobile">Mobile</TabsTrigger>
                        </TabsList>
                      </div>
                    </Tabs>
                  </div>
                  <div className="bg-gray-100 p-4 h-96 overflow-auto">
                    <div className="bg-white shadow-md rounded-lg overflow-hidden h-full">
                      <div className="h-10 bg-gray-200 flex items-center px-4">
                        <div className="flex gap-2">
                          <span className="w-3 h-3 rounded-full bg-red-500"></span>
                          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                          <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        </div>
                      </div>
                      <div className="overflow-auto" style={{ height: "calc(100% - 2.5rem)" }}>
                        <div className="transform scale-[0.6] origin-top-left w-[166.67%] h-[166.67%]">
                          {selectedTemplate === "minimalist" ? (
                            <MinimalistTemplate 
                              storeData={{ 
                                name: storeData.name || "Sample Store",
                                description: storeData.description || "Welcome to our store"
                              }}
                              products={[]}
                            />
                          ) : (
                            <BoldTemplate 
                              storeData={{ 
                                name: storeData.name || "Sample Store",
                                description: storeData.description || "Welcome to our store"
                              }}
                              products={[]}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {currentStep === 3 && (
            <Card className="max-w-3xl mx-auto shadow-md">
              <CardHeader>
                <CardTitle>Confirm Store Details</CardTitle>
                <CardDescription>
                  Please review your store details before creating it
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Store Name</p>
                    <p>{storeData.name}</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Store URL</p>
                    <p>{storeData.subdomain}.starkbay.com</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Template</p>
                    <p className="capitalize">{selectedTemplate}</p>
                  </div>
                  
                  {storeData.description && (
                    <div className="space-y-1">
                      <p className="text-sm font-medium text-gray-500">Description</p>
                      <p>{storeData.description}</p>
                    </div>
                  )}

                  <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
                    <p>
                      <strong>Note:</strong> After creating your store, you&apos;ll be able to add products, 
                      customize your storefront, and configure payment methods from your dashboard.
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleBack}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back
                </Button>
                <Button onClick={handleSubmit} className="bg-[#0d9488] hover:bg-[#0d9488]/90">
                  Create Store
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateStore;
