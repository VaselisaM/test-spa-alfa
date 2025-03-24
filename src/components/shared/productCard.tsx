import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
    onRemove: (id: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onLike, onRemove }) => {
    return (
        <div className={cn('flex flex-col relative w-[270px] h-[400px] p-4 mx-auto shadow-lg rounded-2xl hover:scale-102 transition duration-300 ease-in-out', 'card')}>
            <Link className={cn('absolute w-[100%] h-[100%] top-[0] left-[0] z-[50]', '')} href={`/product/${product.id}`}></Link>
            <button className={cn('ml-auto z-[55] relative cursor-pointer', 'card__button-remove')} onClick={() => onRemove(product.id)}>
                <span className='text-gray-300 text-[24px]'>✖</span>
            </button>
            <Image className="w-[240px] h-[240px] object-cover mx-auto rounded-xl" src={product.imageUrl} alt={product.title} width={240} height={140} />
            <h3 className="mb-1 mt-3 font-bold truncate w-[220px]">
                {product.title}
            </h3>
            <button className={cn('mr-auto z-[55] relative cursor-pointer', 'card__button-like')} onClick={() => onLike(product.id)}>
                {product.liked ? <span className='text-red-400 text-[24px]'>❤</span> : <span className='text-gray-300 text-[24px]'>❤</span>}
            </button>
        </div>
    );
};