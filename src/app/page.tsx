'use client';
import Image from "next/image";
import { Card, CardContent } from "@/component/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/component/ui/carousel"
import WhatsNew from "@/component/circle";
import Autoplay from "embla-carousel-autoplay";
import ProductCart from "@/component/product-cart";
import productData from "@/app/data.json";
import mobileBanners from "@/app/mobileBanner.json";
import bigBanners from "@/app/bigBanners.json";

export default function Home() {
  return (
    <>
      <Carousel className="hidden md:block" plugins={[Autoplay({delay:6000})]}>
        <CarouselContent>
            {bigBanners.map((image,index)=>(
              <CarouselItem key={index}>
                <div>
                  <Card className="rounded-none border-none bg-[#ffffc3] pt-5">
                    <CardContent className="flex items-center justify-center p-0 h-[70vh]">
                        <img src={image.src}/>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 bg-[#ffffc3]"/>
        <CarouselNext className="absolute right-4 bg-[#ffffc3]"/>
      </Carousel>

{/* mobile carousel */}
      <Carousel className="md:hidden" plugins={[Autoplay({delay:6000})]}>
        <CarouselContent>
            {mobileBanners.map((image,index)=>(
              <CarouselItem key={index}>
                <div>
                  <Card className="rounded-none border-none bg-[#ffffc3] pt-3">
                    <CardContent className="flex items-center justify-center p-0">
                        <img src={image.src} className="object-cover h-[400px]"/>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 bg-[#ffffc3]"/>
        <CarouselNext className="absolute right-4 bg-[#ffffc3]"/>
      </Carousel>
    
      {/* Latest Collections */}
      <div className="bg-[#ffffc3] flex flex-wrap justify-center gap-6 py-4">
        <div className="flex flex-col ml-36 mr-36 sm:ml-5 sm:mr-5 sm:mt-8">
          <span className="merienda text-xl">What's</span>
          <span className="merienda font-bold text-3xl">NEW</span>
        </div>
        
        <WhatsNew src={"circle-1.avif"} title="Pashmina"/>
        <WhatsNew src={"circle-2.avif"} title="Bekhudi"/>
        <WhatsNew src={"circle-3.avif"} title="Kid's Pret"/>
        <WhatsNew src={"circle-4.avif"} title="Limited Edition"/>
      </div>

      <h1 className="bg-[#ffffc3] merienda text-2xl [#1F271B] font-semibold pl-10 pb-5">Shop Our Collection</h1>

      {/* Product cart */}
      <main className="bg-[#ffffc3] pb-12">
          {/* loop through the productData array */}
          <div className="sm:grid grid-cols-2 gap-2 lg:grid-cols-3">
            {productData.map((product)=>{
              return(
                <ProductCart src={product.src} details={product.details} price={product.price}/>
              );
            })}
          </div>
      </main>
    </>
  );
}
