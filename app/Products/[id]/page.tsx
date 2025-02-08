import { client } from "@/sanity/lib/client";
import ProductDetail from "../../component/ProductDetail"; 

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {

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
