import Link from "next/link";

export default function Product()
{
    return <>
    <h1>Products</h1>
    <h2><Link href="Product/1">Product 1</Link></h2>
    <h2><Link href="Product/2" >Product 2</Link></h2>
    <h2><Link href="Product/3" replace>Product 3</Link></h2>
    </>
}