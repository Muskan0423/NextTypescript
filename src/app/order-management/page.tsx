"use client";
import { useRouter } from "next/navigation"

export default function orders()
{
    const router=useRouter()
    const handleclick=()=>{
        router.push("/")
    }
    return <>
    <h1>Place Your Order</h1>
    <button onClick={handleclick}>Click me</button>
    </>
}