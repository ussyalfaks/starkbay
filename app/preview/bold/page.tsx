import { BoldTemplate } from "@/components/templates/BoldTemplate";

const BoldPreview = () => {
  const sampleStoreData = {
    name: "Sample Store",
    description: "Welcome to our bold and vibrant store. Discover amazing products.",
    accent: "#0d9488"
  };

  return <BoldTemplate storeData={sampleStoreData} products={[]} />;
};

export default BoldPreview;