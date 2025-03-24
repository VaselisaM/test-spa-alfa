import { create } from "zustand";

interface Product {
    id: string;
    title: string;
    desctiption: string;
    imageUrl: string;
    liked: boolean;
}

interface Api {
    date: string;
    title: string;
    explanation: string;
    url: string;
}

interface ProductState {
    products: Product[];
    fetchProducts: () => Promise<void>;
    toggleLike: (id: string) => void;
    removeProduct: (id: string) => void;
}

export const useProductsStore = create<ProductState>((set) => ({
    products: [],
    fetchProducts: async () => {
        const response = await fetch ('https://api.nasa.gov/planetary/apod?api_key=m4LzR3VbxcXq8Xy7D3Kvkjz9mzXqOdVMzaCEq5pY&count=10');
        const data: Api[] = await response.json();
        const newProducts = data.map((item) => ({
            id: item.date,
            title: item.title,
            desctiption: item.explanation,
            imageUrl: item.url,
            liked: false,
        }));
        set({ products: newProducts });
    },
    toggleLike: (id) =>
        set((state) => ({
            products: state.products.map((product) =>
                product.id === id ? { ...product, liked: !product.liked } :product
            ),
        })),
    removeProduct: (id) =>
        set((state) => ({
            products: state.products.filter((product) => product.id !== id),
        })),
}));
