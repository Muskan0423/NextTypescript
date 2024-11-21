"use client";

import Link from "next/link"
import './styles.css'
import { usePathname } from "next/navigation"

const navlinks=[
    {name:"Register",href:"/register"},
    {name:"Login",href:"/login"},
    {name:"Forgot Password",href:"/forgot-password"}
];



export default function InnerLayout({children}:{children:React.ReactNode})
{
    
const pathname=usePathname();
    return<>
   {navlinks.map((link)=>{
const isActive=pathname.startsWith(link.href)
    return <Link className=
    {isActive?"font-bold mr-4": "text-blue-400 mr-2"} href={link.href}>{link.name}</Link>
   })}
    {children}
    </>
}