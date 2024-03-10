
import React, { useState, useEffect } from 'react';
import CustomerReviewsVideo from '../../assets/Homeimage/customerReviews.mp4'

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      title: "Exceptional Stay at Kewton Hotel!",
      name: 'Anup Acharya Chhetri',
      review: <div>
                "Our experience at Kewton Hotel was nothing short of exceptional. The staff was incredibly welcoming, 
                ensuring every detail of our stay was perfect. The room was immaculate, offering a luxurious and comfortable environment. 
                The diverse dining options exceeded our expectations, providing a delightful culinary journey. The hotel's amenities, from 
                the sparkling swimming pool to the well-equipped gaming area, added a perfect touch to our getaway. Kewton Hotel truly goes above 
                and beyond to create an unforgettable experience. We can't wait to return!"
              </div>
    },
    {
      id: 2,
      title: "A Delightful Escape",
      name: 'Kirtan Kunwar',
      review: <div>
                "Our recent stay at Kewton Hotel was a delightful escape from the ordinary. The hotel's ambiance exudes elegance and warmth,
                 creating a welcoming atmosphere. The attention to detail by the staff made us feel genuinely cared for. The game facilities, 
                 especially the pool and snooker area, provided ample entertainment. The food delivery service brought culinary delights to our room, 
                 showcasing the hotel's commitment to excellence. Kewton Hotel is more than just accommodation; it's a haven of comfort and luxury. We 
                 highly recommend it to anyone seeking a remarkable retreat."
              </div>
    },
    {
      id: 3,
      title: "Amazing Experience at Kewton",
      name: 'Raj Lamichhane',
      review: <div>
                "Our stay at Kewton Hotel was truly amazing. The modern amenities and attentive staff contributed to an unforgettable experience.
                The spacious rooms were well-designed for comfort, and the hotel's dining options exceeded our expectations. We enjoyed every
                moment, from relaxing by the pool to exploring the nearby attractions. Kewton Hotel sets a high standard for hospitality, and
                we look forward to returning for another memorable stay."
              </div>
    },
    {
      id: 4,
      title: "Unforgettable Memories",
      name: 'Dolraj Pun Magar',
      review: <div>
                "Our time at Kewton Hotel created unforgettable memories. The staff's dedication to providing excellent service was evident in every detail.
                The room was spacious and well-appointed, ensuring a comfortable stay. The hotel's central location allowed us to explore the city with ease.
                We particularly enjoyed the delicious cuisine offered by the hotel's restaurant. Kewton Hotel exceeded our expectations, and we can't wait to come back."
              </div>
    },
    
  ];

  const [visibleReviews, setVisibleReviews] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;

      
      if (scrollPosition > 500) {
        setVisibleReviews(reviews.length);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [reviews.length]);

  return (
    <div className='relative py-16 bg-black text-white  '>
      <div className='absolute inset-0 z-10'>
        <video
          autoPlay
          loop
          muted
          className='object-cover w-full h-full opacity-50'
        >
          <source src={CustomerReviewsVideo} type='video/mp4' />
        </video>
      </div>
      <h2 className='text-4xl font-bold mb-8 text-white uppercase text-center'>Customer Reviews</h2>
      <div className='relative z-20 max-w-3xl mx-auto text-center border-2 border-[#c9c6c2] rounded-3xl p-14'>
        
        <div className='flex flex-wrap justify-center gap-8 overflow-auto' style={{ maxHeight: '400px' }}>
          {reviews.slice(0, visibleReviews).map((review) => (
            <div key={review.id} className='bg-[#141414] p-6 rounded-lg shadow-md w-full '>
              <div className='text-yellow-500 text-xl font-bold mb-4'>{review.title}</div>
              <div className='text-white mb-4'>{review.review}</div>
              <div className='text-white font-semibold'>{review.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
