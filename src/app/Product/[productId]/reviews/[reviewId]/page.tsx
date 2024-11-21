

import {notFound} from 'next/navigation';

export default function ProductReviewDetails({params}:{params:{productId:string,reviewId:string}})
{
    if(parseInt(params.reviewId)>1000)
    {
        notFound();
    }
    return <h1>Hello Product{params.productId} to get review {params.reviewId}</h1>;
}