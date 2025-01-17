import React from "react";
import { Details } from "@/app/data/overviewdetail/page"
import { useEffect, useState, useRef } from "react";



const OverView =() =>{
    const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);
    const [hasAnimated, setHasAnimated] = useState(false); // Track if animation has run
    const gridRef = useRef<HTMLDivElement>(null);
  
    useEffect(() => {
      const targetValues = Details.map((item) =>
        item.title.endsWith("M+") || item.title.endsWith("+")
          ? parseInt(item.title.replace(/[M+]/g, ""))
          : 0
      );
  
      const updateCount = (index: number, target: number) => {
        let count = 0;
        const increment = Math.ceil(target / 100);
  
        const interval = setInterval(() => {
          if (count < target) {
            count += increment;
            setCounts((prevCounts) => {
              const newCounts = [...prevCounts];
              newCounts[index] = Math.min(count, target);
              return newCounts;
            });
          } else {
            setCounts((prevCounts) => {
              const newCounts = [...prevCounts];
              newCounts[index] = target;
              return newCounts;
            });
            clearInterval(interval);
          }
        }, 20);
      };
  
      const observerCallback = (entries: IntersectionObserverEntry[]) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          targetValues.forEach((target, index) => {
            updateCount(index, target);
          });
          setHasAnimated(true);
        }
      };
  
      const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.9, // Trigger when 10% of the component is visible
      });
  
      if (gridRef.current) {
        observer.observe(gridRef.current);
      }
  
      return () => {
        if (gridRef.current) {
          observer.unobserve(gridRef.current);
        }
      };
    }, [hasAnimated]);
    return (
        <div className="bg-neutral-900 py-10" ref={gridRef}>
            <div className="container mx-auto max-w-screen-lg">
            
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-[7%]">
            {
                Details.map((item, index) => (
                    <div key={index} className={`${index < 3 ? "md:border-r" : ""} h-28 p-4`}>
                    <h3 className="useclass text-xl md:text-4xl font-bold">{index === 3
                ? `${counts[index]}M+` // Specific logic for Total Revenue
                : `${counts[index]}${item.title.endsWith("+") ? "+" : ""}`}</h3>
                    <p className="text-white text-sm md:text-lg">{item.text}</p>
                    </div>
                ))
            }
            </div>
           </div>
        </div>
    )
}
export default OverView
