import { useQuery } from "@tanstack/react-query";
import { IReviewResponse } from "../utils/interfaces";
import axios from "axios";



const API_BASE = `${import.meta.env.VITE_API_BASE_URL}/reviews/`;

const fetchBookReviews = async (bookId: string): Promise<IReviewResponse> => {
    try {
        const { data } = await axios.get(`${API_BASE}${bookId}`, { withCredentials: true })
        return data;
    } catch (err: any) {
        throw new Error(err.response?.data?.message) || "Failed to fetch booklist"
    }

}
export const addReviews = async (bookId: string, rating: number, comment: string) => {
    try {

        if (!rating) throw new Error("Rating is required")

        const { data } = await axios.post(`${API_BASE}${bookId}`,
            { rating, comment },
            { withCredentials: true }
        )
        return data;
    } catch (err: any) {
        throw new Error(err.response?.data?.message) || "Failed to add Reviews"
    }
}

export const getBookReviews = (bookId: string) => {
    return useQuery({
        queryKey: ["review", bookId],
        queryFn: () => fetchBookReviews(bookId),
        enabled: !!bookId
    })
}
