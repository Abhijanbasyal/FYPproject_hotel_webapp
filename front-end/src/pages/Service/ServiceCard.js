import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import barService from '../../assets/ServiceImage/barService.jpg';
import freeWifiService from '../../assets/ServiceImage/freeWifiService.jpg';
import laundryService from '../../assets/ServiceImage/laundryService.jpg';
import elavatorService from '../../assets/ServiceImage/elavatorService.jpg';

const ServiceCard = () => {
    const [currentPage, setCurrentPage] = useState(0);

    const serviceCardDetail = [{
        images: barService,
        description: <div>Bar Service</div>,
    },
    {
        images: freeWifiService,
        description: <div>Free Wifi service</div>,
    },
    {
        images: laundryService,
        description: <div>Laundry Service</div>
    },
    {
        images: elavatorService,
        description: <div>Elevator Service</div>,
    },
    {
      images: barService,
      description: <div>Bar Service</div>,
  },
  {
      images: freeWifiService,
      description: <div>Free Wifi service</div>,
  },
  {
      images: laundryService,
      description: <div>Laundry Service</div>
  },
  {
      images: elavatorService,
      description: <div>Elevator Service</div>,
  },{
    images: barService,
    description: <div>Bar Service</div>,
},
{
    images: freeWifiService,
    description: <div>Free Wifi service</div>,
},
{
    images: laundryService,
    description: <div>Laundry Service</div>
},
{
    images: elavatorService,
    description: <div>Elevator Service</div>,
},{
  images: barService,
  description: <div>Bar Service</div>,
},
{
  images: freeWifiService,
  description: <div>Free Wifi service</div>,
},
{
  images: laundryService,
  description: <div>Laundry Service</div>
},
{
  images: elavatorService,
  description: <div>Elevator Service</div>,
},{
  images: barService,
  description: <div>Bar Service</div>,
},
{
  images: freeWifiService,
  description: <div>Free Wifi service</div>,
},
{
  images: laundryService,
  description: <div>Laundry Service</div>
},
{
  images: elavatorService,
  description: <div>Elevator Service</div>,
},
{
  images: elavatorService,
  description: <div>Elevator Service</div>,
}];

    const itemsPerPage = 12;
    const pageCount = Math.ceil(serviceCardDetail.length / itemsPerPage);
    const offset = currentPage * itemsPerPage;

    const currentServices = serviceCardDetail.slice(offset, offset + itemsPerPage);

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const canPreviousPage = currentPage > 0;
    const canNextPage = currentPage < pageCount - 1;

    return (
        <div className='relative bg-[#141414]'>
            <div className=''>
                <div className='text-center'>
                    <div>
                        We provide many services
                    </div>
                    <div className=''>
                        Celebrate life's special moments with us at Hotel Kewton, where every detail is designed to exceed your expectations. From 
                        luxurious accommodations to impeccable service, we strive to make your stay truly unforgettable. Indulge in our array of 
                        amenities and experience the epitome of hospitality. Welcome to a world of unparalleled comfort and elegance.
                    </div>
                </div>
                <div className='flex flex-wrap justify-start'>
                    {currentServices.map((service, index) => (
                        <div key={index} className='flex flex-col items-center justify-center w-1/4  px-2'>
                            <div >
                                <img src={service.images} alt='' className='w-full    object-cover' />

                            </div>
                            <div className='text-white w-full'>{service.description}</div>
                        </div>
                    ))}
                </div>
                {pageCount > 1 && (
                    <div className="pagination-container">
                        <ReactPaginate
                            pageCount={pageCount}
                            onPageChange={handlePageClick}
                            containerClassName="pagination"
                            activeClassName="active"
                            previousLabel="Previous"
                            nextLabel="Next"
                            disabledClassName="disabled"
                            previousClassName={!canPreviousPage ? 'disabled' : ''}
                            nextClassName={!canNextPage ? 'disabled' : ''}
                            previousLinkClassName={!canPreviousPage ? 'disabled-link' : ''}
                            nextLinkClassName={!canNextPage ? 'disabled-link' : ''}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default ServiceCard;
