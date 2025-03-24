"use client"

import React, { useEffect } from "react";
import { ProductCard } from "./productCard";
import { useProductsStore } from "@/store/productStore";
import { Container } from "@/components/shared/container";

export const ProductsPage: React.FC = () => {
    const { products, fetchProducts, toggleLike, removeProduct } = useProductsStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (
        <div>
            <Container className='pt-10 pb-10 grid gap-4 grid-cols-4'>
                {products.map((product) => (
                    <ProductCard
                    key={product.id}
                    product={product}
                    onLike={toggleLike}
                    onRemove={removeProduct}
                    ></ ProductCard>
                ))}
            </ Container>
        </div>
    )
}