import React from "react";
import Link from "next/link";
import '@fortawesome/fontawesome-free/css/all.min.css';


const Platform = () => {
    return (
        <div className="flex space-x-10 mt-6">
      <Link target="_blank" href="https://www.facebook.com/conceptrecall">
       
          <i className="fab fa-facebook text-5xl  text-gray-500 hover:useclass"></i>
        
      </Link>

      <Link target="_blank" href="https://www.instagram.com/teamconceptrecall/">
    
          <i className="fab fa-instagram text-5xl text-gray-500 hover:useclass"></i>
       
      </Link>

      <Link target="_blank" href="https://www.linkedin.com/company/conceptrecall">
    
          <i className="fab fa-linkedin text-5xl text-gray-500 hover:useclass"></i>
        
      </Link>
    </div>
    )
}
export default Platform