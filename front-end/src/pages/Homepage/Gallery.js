import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';


import SwimmingGallery from '../../assets/gallerySwimming.jpg';
import CookingGallery from '../../assets/galleryCooking.jpg';
import SnookerGallery from '../../assets/gallerySnooker.jpg';
import DiningGallery from '../../assets/galleryDinning.jpg';
import ParkGallery from '../../assets/galleryPark.jpg';

const Gallery = () => {
  const photos = [
    { id: 1, title: "Calm Moments in the Swimming Pool", url: SwimmingGallery },
    { id: 2, title: "Culinary Magic in the Kitchen", url: CookingGallery },
    { id: 3, title: "Family Fun at the Snooker Table", url: SnookerGallery },
    { id: 4, title: "Delicious Dining in Our Superb Room", url: DiningGallery },
    { id: 5, title: "Nature's Embrace in the Park", url: ParkGallery },
    //image will be added
  ];

  const imagesPerPage = 3;
  const totalImages = photos.length;
  const totalPages = Math.ceil(totalImages / imagesPerPage);

  const [currentPage, setCurrentPage] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const startSlice = currentPage * imagesPerPage;
  const endSlice = startSlice + imagesPerPage;

  return (
    <div className='relative bg-black text-white h-[42rem]'>
      <div className=''>
        <div className='max-w-8xl mx-auto h-full text-center overflow-hidden'>
          <h2 className='text-3xl mini:text-4xl font-bold mb-8 p-2 mini:pt-4 text-white '>Gallery</h2>
          <div className='flex flex-col items-center h-full'>
            <div className='flex flex-col items-center space-y-3 mini:space-y-0 mini:flex-row mini:space-x-4 h-[30rem] mini:w-full mini:h-[31rem] '>
              {photos.slice(startSlice, endSlice).map((photo, index) => (
                <div
                  key={photo.id}
                  className='relative w-[15rem] h-[22rem] mini:w-1/3 mini:h-full'
                  onClick={() => setHoveredIndex(startSlice + index)}
                  onMouseEnter={() => setHoveredIndex(startSlice + index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className='rounded-lg shadow-md w-full h-full object-cover cursor-pointer transition-transform duration-300 transform hover:scale-105'
                  />
                  {hoveredIndex === startSlice + index && (
                    <p className='hidden mini:block absolute bottom-0 left-0 right-0 bg-gray-800 text-white text-4xl mini:text-4xl font-bold text-center opacity-75 rounded h-full pt-32'>
                      {photo.title}
                    </p>
                  )}
                </div>
              ))}
            </div>

            <ReactPaginate 
              previousLabel={
                <button
                  className={`text-white px-5 border-r-2 border-white/40 hover:border-yellow-500 hover:text-yellow-500 ${
                    currentPage === 0 ? 'cursor-not-allowed' : ''
                  }`}
                  disabled={currentPage === 0}
                >
                  Prev
                </button>
              }
              nextLabel={
                <button
                  className={`text-gray-500 px-5 border-l-2 border-white/40 hover:border-yellow-500 hover:text-yellow-500 ${
                    currentPage + 1 >= totalPages ? 'cursor-not-allowed' : ''
                  }`}
                  disabled={currentPage + 1 >= totalPages}
                >
                  Next
                </button>
              }
              breakLabel={'...'}
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick} 
              containerClassName={' flex items-center space-x-2 mt-16 mini:mt-8 border-2 border-white/40'}
              activeClassName={'active'}
              initialPage={currentPage}

              
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
