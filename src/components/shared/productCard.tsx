import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
    id: string;
    title: string;
    desctiption: string;
    imageUrl: string;
    liked: boolean;
}

interface ProductCardProps {
    product: Product;
    onLike: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onLike }) => {
    return (
        <div className='shadow-lg rounded-2xl hover:scale-102 transition duration-300 ease-in-out'>
            <Link href={`/product/${product.id}`}>
                <Image className="w-[215px] h-[215px]" src={product.imageUrl} alt={product.title} width="960" height="720" />
                <h3 className="mb-1 mt-3 font-bold">
                    {product.title}
                </h3>
                <button onClick={() => onLike(product.id)}>
                    {product.liked ? <span className='text-red-400'>❤</span> : <span className='text-lime-900'>❤</span>}
                </button>
            </Link>
        </div>
    );
};