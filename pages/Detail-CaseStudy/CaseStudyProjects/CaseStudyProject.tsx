"use client";
import React, { useState } from "react";
import IndusComp from "@/components/Industries-comp/IndusComp";
import { compData1 } from "@/app/data/projectsdata/page";

const itemsPerPageConfig = [7, 7, 5];

const CaseStudyProject = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = itemsPerPageConfig.length;
  const startIndex = itemsPerPageConfig
    .slice(0, currentPage - 1)
    .reduce((acc, num) => acc + num, 0);
  const displayedData = compData1.slice(
    startIndex,
    startIndex + itemsPerPageConfig[currentPage - 1]
  );
  const changePage = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="">
        {displayedData.map((data, index) => (
          <IndusComp
            key={index}
            tags={data.tags}
            tags1={data.tags1}
            tags2={data.tags2}
            svgSrc={data.svgSrc}
            svgAlt={data.svgAlt}
            heading={data.heading}
            descriptions={data.descriptions}
            imageSrc={data.imageSrc}
            imageAlt={data.imageAlt}
            bgColor={data.bgColor}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center space-x-6 mt-6">
        <button
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
          className="text-neutral-400 text-sm"
        >
          Pre
        </button>

        {itemsPerPageConfig.map((_, index) => (
          <button
            key={index}
            onClick={() => changePage(index + 1)}
            className={`px-3 py-2 ${
              currentPage === index + 1
                ? "bg-bguseclass text-white"
                : "text-zinc-400"
            } rounded-2xl`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="text-neutral-400 text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CaseStudyProject;
