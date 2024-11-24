import { Eye, Heart} from "lucide-react";
import CartButton from "./cart-button";
interface IProps{
    src: string;
    details:string;
    price:string;
}
function ProductCart(props:IProps){
    return(
        <>
            <div className="h-[570px] w-[288px] mx-auto pb-4 rounded-lg flex flex-col sm:w-[300px] lg:w-[30vw] lg:h-[88vh] xl:w-[26vw]">
                <div style={{backgroundImage: `url(${props.src})`}} className="h-[80%] w-[100%] rounded-t-lg border-[1px] border-[#1F271B] bg-cover bg-no-repeat bg-center flex flex-col items-end sm:h-[500px] sm:w-[300px] lg:w-[30vw] xl:w-[26vw]">
                {/* heart */}
                    <span className="group flex flex-row-reverse gap-2 mt-5 mr-5">
                        <Heart className="hover:cursor-pointer"/>
                        <span className="group-hover:flex rounded-sm bg-[#1F271B] bg-opacity-75 py-1 px-4 text-[#ffffc3] items-center -translate-y-1 relative hidden">
                            <span>Add to Wishlist</span>
                            <span className="border-[8px] border-[#1F271B] border-opacity-75 border-r-0 border-y-transparent border-y-[6px] translate-x-6"></span>
                        </span>
                    </span>
                {/* eye */}
                    <span className="group flex flex-row-reverse gap-2 mt-3 mr-5">
                        <Eye className="hover:cursor-pointer"/>
                        <span className="group-hover:flex rounded-sm bg-[#1F271B] bg-opacity-75 py-1 px-4 text-[#ffffc3] items-center relative hidden">
                            <span>Quick View</span>
                            <span className="border-[8px] border-[#1F271B] border-opacity-75 border-r-0 border-y-transparent border-y-[6px] translate-x-6"></span>
                        </span>
                    </span>
                </div>

                <div className="bg-[#ffffc3] flex pt-2 pl-2 h-[20%] w-[100%] rounded-b-lg justify-between items-center">
                {/* product Info */}
                    <div>
                    <span className="text-sm">{props.details}</span><br />
                    <span className="merienda text-xl font-semibold">{props.price}</span>
                    </div>
                {/* Cart-button */}
                    <CartButton />
                </div>
            </div>
        </>
    );
}
export default ProductCart;
