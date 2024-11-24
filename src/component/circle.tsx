interface IProps{
    src: string;
    title: string
}

function WhatsNew(props:IProps){
    return(
        <>
        <div className="flex flex-col items-center">
            <div className="h-28 w-28 rounded-full flex justify-center items-center bg-purple-600 border-[1px] border-black">
            <img src={props.src} alt="latest" className="object-cover rounded-full h-full w-full"/>
            </div>
            <span className="merienda tracking-wider">{props.title}</span>
        </div>
        </>
    );
}
export default WhatsNew;