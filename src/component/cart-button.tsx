import { ShoppingCart } from "lucide-react";
import { useState } from "react";
function CartButton(){
    const [addToCart,setAddToCart]=useState(false);
    function addingToCart(){
        setAddToCart(true);
    }
    return(
        <button className={`relative bg-[#1F271B] text-[#ffffc3] ml-4 h-10 w-28 rounded-xl flex justify-center items-center`} onClick={addingToCart}>
            <span style={{fontSize:'14px',fontFamily:'merienda'}} className={ addToCart ? `cart-item-animate` : ''}>Add to Cart</span>
            <ShoppingCart className={`icon absolute invisible -translate-x-[30px] transition-all ease-in ${addToCart ?'scale-100 cart-animate' : 'scale-0'}`}/>
        </button>
    );
}
export default CartButton;