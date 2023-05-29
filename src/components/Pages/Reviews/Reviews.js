import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import ReviewCard from '../Review/ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://super-wheel-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div className='container '>
            <h1 className='text-center mt-5 mb-5 '>Happy Client <span className='text-danger'>Reviews</span></h1>
            <CardGroup>
                {
                    reviews.map(reviewData => (
                        <ReviewCard
                            key={reviewData._id}
                            reviewData={reviewData}
                        ></ReviewCard>))
                }
            </CardGroup>


        </div>
    );
};

export default Reviews;