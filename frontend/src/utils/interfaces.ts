export interface IBook {
    _id: string;  
    title: string;    
    author: string;      
    description: string; 
    image: string;      
    averageRating: number; 
  }

  export interface IReview{
    _id: string,
    book: string,
    user: string,
    rating: number,
    comment?: string
  }


  export interface IReviewResponse{
    reviews: IReview[],
    nextPage?: number,
    totalReviews?: number
  }


  export interface IUser {
    _id: string,
    name: string,
    email: string,
    role: string
}