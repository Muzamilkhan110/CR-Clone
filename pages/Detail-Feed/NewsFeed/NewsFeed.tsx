'use client'
import React from 'react'
import { feedData } from '@/app/data/experience/page'
import ImageCard from '@/components/RecentNews/Image-Card'
import { useState } from 'react';


const itemsPerPageConfig = [7, 2];

const NewsFeed = () => {
    const [currentPage, setCurrentPage] = useState(1);
      const totalPages = itemsPerPageConfig.length;
      const startIndex = itemsPerPageConfig
        .slice(0, currentPage - 1)
        .reduce((acc, num) => acc + num, 0);
      const displayedData = feedData.slice(
        startIndex,
        startIndex + itemsPerPageConfig[currentPage - 1]
      );
      const changePage = (pageNumber: number) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
          setCurrentPage(pageNumber);
        }
      };
  return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 text-white">
            {displayedData.map((card, index) => (
              <ImageCard
                key={index}
                imageSrc={card.imageSrc}
                imageAlt={card.imageAlt}
                title={card.title}
                description={card.description}
                linkText={card.linkText}
                svgIco={card.svgIco} // Change this to match the interface
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
  )
}

export default NewsFeed