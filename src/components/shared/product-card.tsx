import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
    id: number;
    name: string;
    imageUrl: string;
    className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, imageUrl, className }) => {
    return (
        <div className={cn('shadow-lg rounded-2xl hover:scale-102 transition duration-300 ease-in-out', className)}>
            <Link href={`/product/${id}`}>
                <div className="flex justify-center p-6 bg-secondary rounded-lg h-[260px]">
                    <Image className="w-[215px] h-[215px]" src={imageUrl} alt={name} width="256" height="256" />
                </div>
                <h3 className="mb-1 mt-3 font-bold">
                    {name}
                </h3>
                <button>
                    like
                </button>
            </Link>
        </div>
    );
};