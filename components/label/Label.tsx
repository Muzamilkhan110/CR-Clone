import React from "react";

interface labelProps {
    labeled ?: {
        label:string;
        input:string;
    }[],
}
const Label:React.FC<labelProps> =({
    labeled
}) => {
    return(
        <div>
            {
                labeled?.map((item: any)=>
                <div>
                <div>{item.label}</div>
                <div>{item.input}</div>
                </div>
                )
            }
        </div>
    )
}