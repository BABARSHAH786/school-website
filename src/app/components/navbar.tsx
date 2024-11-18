import Link from "next/link"
export default function NavBar(){
    return (
      <div>
        <header className="bg-indigo-500 text-[40px]  h-[45px] flex list-none flex-wrap justify-center font-medium text-xl font-serif">
        


    <li className="justify-arround mt-[8px]  mr-4 hover:text-yellow-200 hover:-translate-y-1 "><Link href='/'>Home</Link>   </li>
        <li className="mr-4 mt-[8px] hover:text-yellow-200 hover:-translate-y-1"><Link href='/about'>About</Link>   </li>
        <li className="mr-4 mt-[8px] hover:text-yellow-200 hover:-translate-y-1"><Link href='/products'>Products</Link></li>
        <li className="mr-4 mt-[8px] hover:text-yellow-200 hover:-translate-y-1"><Link href='/courses'>Course</Link></li>
       
        

    
    </header>
  </div>

    )
  }