

export default function ComplexDashboardLayout({children,useranalytics,revenue,notification,login}:{children:React.ReactNode,useranalytics:React.ReactNode,revenue:React.ReactNode,notification:React.ReactNode,login:React.ReactNode})
{
    const isLoggedIn=true;
return isLoggedIn?(<>
<div>{children}</div>

<div style={{display:'flex'}}>
    <div style={{display:"flex", flexDirection:"column"}}>
        <div>{useranalytics}</div>
        <div>{revenue}</div>
    </div>
<div style={{display:"flex" , flex:1}}>
    <div>{notification}</div>
</div>
</div>
</>):(login)
} 