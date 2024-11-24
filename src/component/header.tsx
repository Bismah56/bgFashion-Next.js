import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/component/ui/sheet"
import Link from "next/link";
import { Facebook, Heart, Instagram, Menu, Search, ShoppingBag, Twitter, User, Youtube, Music2 } from "lucide-react";

function Header(){
    let cartCount = 0;
    let wishlistCount = 0;
    return(
    <header>
        <section className="bg-[#ffffc3] flex justify-between items-end h-[12vh] py-2 border-b-2 border-b-[#cfcf76]">
            {/* Menu */}
            <div className="lg:hidden">
                <Sheet>
                <SheetTrigger><Menu className="ml-2" /></SheetTrigger>
                <SheetContent side={"left"} className="flex flex-col bg-[#ffffc3] rounded-r-3xl border-r-4 border-r-gray-500">
                    <div className="flex mt-6 border-b-2 border-b-black">
                    <input type="search" placeholder="SEARCH" className="font-bold w-[190px] outline-none pb-3 bg-[#ffffc3]"/>
                    <Search color="grey" className="ml-auto"/>
                    </div>

                    <ul className="merienda flex flex-col gap-10">
                        <li><Link href='' className="hover:font-semibold hover:underline">BRIDALS</Link></li>
                        <li><Link href='' className="hover:font-semibold hover:underline">KIDS</Link></li>
                        <li><Link href='' className="hover:font-semibold hover:underline">MENSWEAR</Link></li>
                        <li><Link href='' className="hover:font-semibold hover:underline">UNSTITCHED</Link></li>
                        <li><Link href='' className="hover:font-semibold hover:underline">BESTSELLERS</Link></li>
                        <li><Link href='' className="hover:font-semibold hover:underline">SHAWLS & STOLES</Link></li>
                        <li><Link href='' className="hover:font-semibold hover:underline">CONTACT US</Link></li>
                    </ul>
                    
                    <h2 className="self-center font-bold  mt-12">FOLLOW US:</h2>
                    <div className="flex gap-3 self-center">
                        <Facebook className="hover:-translate-y-2 hover:cursor-pointer transition-all"/>
                        <Instagram className="hover:-translate-y-2 hover:cursor-pointer transition-all"/>
                        <Twitter className="hover:-translate-y-2 hover:cursor-pointer transition-all"/>
                        <Youtube className="hover:-translate-y-2 hover:cursor-pointer transition-all"/>
                        <Music2 className="hover:-translate-y-2 hover:cursor-pointer transition-all"/>
                    </div>
                </SheetContent>
                </Sheet>
            </div>

            {/* Logo */}
            <div className="ml-8">
                <img src="/FashionStudio.png" width={160} height={50} alt="logo"></img>
            </div>

            {/* Icons */}
            <div className="flex gap-4 mr-2 mb-2">
                <Search className="hover:cursor-pointer" />
                <User className="hidden lg:block hover:cursor-pointer"/>
                <Heart className="hidden lg:block hover:cursor-pointer"/>
                <ShoppingBag className="hover:cursor-pointer"/>
            </div>

            {/* count */}
            <div className="bg-black text-center text-white px-1 rounded-full absolute text-xs top-6 right-2">{cartCount}</div>
            <div className="hidden lg:block bg-black text-white px-1 rounded-full absolute text-xs top-6 right-12">{wishlistCount}</div>
        </section>
        <section>
            <ul className="hidden lg:flex merienda h-[5vh] gap-8 justify-center items-end bg-[#ffffc3]">
                        <li><Link href='' className="hover:font-semibold hover:underline">BRIDALS</Link></li>
                        <li><Link href='' className="hover:font-semibold hover:underline">KIDS</Link></li>
                        <li><Link href='' className="hover:font-semibold hover:underline">MENSWEAR</Link></li>
                        <li><Link href='' className="hover:font-semibold hover:underline">UNSTITCHED</Link></li>
                        <li><Link href='' className="hover:font-semibold hover:underline">BESTSELLERS</Link></li>
                        <li><Link href='' className="hover:font-semibold hover:underline">SHAWLS & STOLES</Link></li>
                        <li><Link href='' className="hover:font-semibold hover:underline">CONTACT US</Link></li>
            </ul>
        </section>
    </header>
    );
}
export default Header;