import React from 'react'

interface bannerProps {
    title?: string;
    description?: string;

}
const Banner:React.FC<bannerProps> = ({
    title,
    description,

}) => {
  return (
    <div>
       <h1>{title}</h1>
       <p>{description}</p>
    </div>
  )
}
export default Banner