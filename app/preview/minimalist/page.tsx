import { MinimalistTemplate } from "@/components/templates/MinimalistTemplate";

const MinimalistPreview = () => {
  const sampleStoreData = {
    name: "Sample Store",
    description:
      "Welcome to our minimalist store. Explore our curated collection.",
  };

  return <MinimalistTemplate storeData={sampleStoreData} products={[]} />;
};

export default MinimalistPreview;
