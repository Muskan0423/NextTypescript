export default function ProductDetails({
    params,
  }: {
    params: { productId: string };
  }) {
    return <h1>Hello Product {params.productId}</h1>;
  }
  