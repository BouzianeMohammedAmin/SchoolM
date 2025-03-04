 
export default function DashbordLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='h-screen flex'>
    
    <div className="w-[16%] bg-amber-600">L</div>
    <div className="w-[84%] bg-amber-950">R</div>
    
    </div>
   );
}
