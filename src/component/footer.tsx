'use client';
import { Facebook, Instagram, Twitter, Youtube} from "lucide-react";

export default function Footer(){
    const onChevron1Click=()=>{
        const right = document.querySelector('.chevron-r') as HTMLSpanElement;
        const ul = document.querySelector('.links') as HTMLUListElement;
        const ul3 = document.querySelector('.links3') as HTMLUListElement;
        right.classList.toggle('rotate-90');
        right.classList.toggle('mt-[16px]');
        ul.classList.toggle('visible');
        ul.classList.toggle('hidden');
    }
    const onChevron2Click=()=>{
        const right = document.querySelector('.chevron2-r') as HTMLSpanElement;
        const ul2 = document.querySelector('.links2') as HTMLUListElement;
        ul2.classList.toggle('visible');
        ul2.classList.toggle('hidden');
        right.classList.toggle('rotate-90');
        right.classList.toggle('mt-[16px]');
    }
    const onChevron3Click=()=>{
        const right = document.querySelector('.chevron3-r') as HTMLSpanElement;
        const ul3 = document.querySelector('.links3') as HTMLUListElement;
        ul3.classList.toggle('visible');
        ul3.classList.toggle('hidden');
        right.classList.toggle('rotate-90');
        right.classList.toggle('mt-[16px]');
    }
    return(
        <footer className="bg-[#1d221a] text-white p-5 lg:flex flex-wrap justify-center gap-10">
            {/* Logo Video */}
            <div>
                <video src="/elegance redefined.mp4" loop autoPlay className="h-[250px] mx-auto lg:mt-20"></video>
            </div>

            {/* Links */}
            <main className="lg:flex gap-14">
                <section>
                    <div className="flex items-center mt-2">
                        <h2 className="text-xl font-semibold">INFORMATION</h2>
                        <span onClick={onChevron1Click} className="chevron-r border-[6px] border-white border-y-transparent border-r-transparent mt-2 ml-2 hover:cursor-pointer lg:hidden"></span>
                    </div>
                    <ul className="hidden links m-5 lg:block lg:ml-0 leading-loose">
                            <li className="hover:cursor-pointer hover:underline">About Us</li>
                            <li className="hover:cursor-pointer hover:underline">Body Measurement Guide</li>
                            <li className="hover:cursor-pointer hover:underline">Charity</li> 
                            <li className="hover:cursor-pointer hover:underline">Contact Us</li>
                            <li className="hover:cursor-pointer hover:underline">Couture Process</li>
                            <li className="hover:cursor-pointer hover:underline">FAQs</li>
                            <li className="hover:cursor-pointer hover:underline">Gift Vouchers</li>
                            <li className="hover:cursor-pointer hover:underline">BG Gazzette</li>
                            <li className="hover:cursor-pointer hover:underline">BG Mansion</li> 
                            <li className="hover:cursor-pointer hover:underline">Media & Press</li>
                            <li className="hover:cursor-pointer hover:underline">Size Chart</li>
                            <li className="hover:cursor-pointer hover:underline">Traditions</li>
                    </ul>
                </section>
                <section>
                    <div className="flex items-center mt-2">
                    <h2 className="text-xl font-semibold">DISCOVER</h2>
                    <span onClick={onChevron2Click} className="chevron2-r border-[6px] border-white border-y-transparent border-r-transparent mt-2 ml-2 hover:cursor-pointer lg:hidden"></span>
                    </div>
                    <ul className="hidden links2 m-5 lg:block lg:ml-0 leading-loose">
                        <li className="hover:cursor-pointer hover:underline">Accessories</li>
                        <li className="hover:cursor-pointer hover:underline">All Collections</li>
                        <li className="hover:cursor-pointer hover:underline">Bridals</li>
                        <li className="hover:cursor-pointer hover:underline">Menswear</li>
                        <li className="hover:cursor-pointer hover:underline">Lehngas</li>
                        <li className="hover:cursor-pointer hover:underline">Sarees</li>
                        <li className="hover:cursor-pointer hover:underline">Sherwani</li>
                        <li className="hover:cursor-pointer hover:underline">Stars wear BG</li>
                        <li className="hover:cursor-pointer hover:underline">Women Formal</li>
                        <li className="hover:cursor-pointer hover:underline">Wedding Vows</li>
                    </ul>
                </section>
                <section>
                    <div className="flex items-center mt-2">
                    <h2 className="text-xl font-semibold">CONTACT</h2>
                    <span onClick={onChevron3Click} className="chevron3-r border-[6px] border-white border-y-transparent border-r-transparent mt-2 ml-2 hover:cursor-pointer lg:hidden"></span>
                    </div>
                    <ul className="hidden links3 m-5 lg:block lg:ml-0 leading-loose">
                        <li className="hover:cursor-pointer hover:underline">+923111555479</li>
                        <li className="hover:cursor-pointer hover:underline">+923133378329</li>
                        <li className="hover:cursor-pointer hover:underline">sales@theworldofbg.com</li>
                        <li className="hover:cursor-pointer hover:underline">support@theworldofbg.com</li>
                        <li className="hover:cursor-pointer hover:underline">Monday To Saturday</li>
                        <li className="hover:cursor-pointer hover:underline">11 AM to 7 PM (PST)</li>
                    </ul>
                </section>
            </main>

            {/* Follow Us*/}
            <div className="flex flex-col items-center gap-4">
                <h3 className="merienda text-2xl font-bold my-4">THE WORLD OF LUXURY, BRIDAL, GROOMS & FORMAL WEAR</h3>
                <span className="flex justify-center gap-4">
                <Facebook className="hover:-translate-y-4 hover:cursor-pointer transition-all"/>
                <Instagram className="hover:-translate-y-4 hover:cursor-pointer transition-all"/>
                <Youtube className="hover:-translate-y-4 hover:cursor-pointer transition-all"/>
                <Twitter className="hover:-translate-y-4 hover:cursor-pointer transition-all"/>
                </span>
                <span>&copy;2024 bg&reg; (Private) Limited All rights reserved.</span>
            </div>
        </footer>
    );
}