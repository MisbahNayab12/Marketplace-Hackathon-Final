import { client } from "@/sanity/lib/client";
import ProductDetail from "../../component/ProductDetail"; // ✅ Create this Client Component

interface ProductPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const products = await client.fetch(`*[_type == "food"]{ _id }`);
  return products.map((product: { _id: string }) => ({ id: product._id }));
}

export default async function ProductPage({ params }: ProductPageProps) {

  console.log("Params received in ProductPage:", params)

  const product = await getProduct(params.id);

  if (!product) 
    {
      return <p>Product not found</p>
    };

  return (
    <ProductDetail product={product} />
  );
}

async function getProduct(id: string) {
  return client.fetch(
    `*[_type == "food" && _id == $id][0]{
        _id,
        name,
        category,
        price,
        originalPrice,
        tags,
        image,
        description,
        available
      }`,
    { id }
  );
}
