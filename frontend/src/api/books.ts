import axios from "axios";
import { IBook } from "../utils/interfaces";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const API_BASE = `${import.meta.env.VITE_API_BASE_URL}/books/`;

const fetchBooks = async (): Promise<IBook[]> => {
    try {
        const { data } = await axios.get(API_BASE);
        return data;
    } catch (err: any) {
        throw new Error(err.response?.data?.message) || "Failed to fetch booklist"
    }
}

const fetchBooksById = async (bookId: string): Promise<IBook> => {
    try {
        const { data } = await axios.get(`${API_BASE}${bookId}`)
        return data
    } catch (err: any) {
        throw new Error(err.response?.data?.message) || "Failed to fetch book details"
    }
}

const deleteBookById = async (bookId: string): Promise<void> => {
    try {
        await axios.delete(`${API_BASE}${bookId}`,{withCredentials: true})
    } catch (err: any) {
        throw new Error(err.response?.data?.message) || "Failed to fetch book details"
    }
}

// use Query Handling
export const getBooks = () => {
    return useQuery({
        queryKey: ["books"],
        queryFn: fetchBooks
    })
}

export const getBooksbyId = (bookId: string) => {
    return useQuery({
        queryKey: ["book", bookId],
        queryFn: () => fetchBooksById(bookId),
        enabled: !!bookId
    })
}

export const useDeleteBooks = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: deleteBookById,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['books'] });
        }
    })
}