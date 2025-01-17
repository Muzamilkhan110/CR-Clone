import React from "react";

interface HeadingProps{
    tittle?: string;
    dynamic?:string;
    text?:string;
}

const Heading:React.FC<HeadingProps> = ({
    tittle,
    dynamic,
    text,
}) => {
    return(
    
                <div className="text-center">
                <div className="flex justify-center gap-1 flex-wrap sm:flex-row">
                <h1 className="text-xl sm:text-2xl md:text-4xl  text-white font-bold">{tittle}</h1>
                <p className="text-xl sm:text-2xl md:text-4xl useclass font-bold">{dynamic}</p>
                </div>
                </div>
          
    )
}
export default Heading