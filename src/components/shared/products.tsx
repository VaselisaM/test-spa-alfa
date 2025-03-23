import React from "react";
// import Link from "next/link";
// import Image from "next/image";
import { cn } from "@/lib/utils";
import { ProductCard } from "./product-card";
import { Container } from "./container";

interface Props {
    title: string;
    // categoryId: number;
    className?: string;
    listClassName?: string;
    items: [{id: number, name: string, imageUrl: string}];
}

export const Products: React.FC<Props> = ({ title, className, listClassName, items }) => {
    return (
        <Container className="flex items-center justify-between py-8">
            <div className={className}>
                <h2>
                    {title}
                </h2>
                <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                    {items
                        .map((item) => (
                            <ProductCard 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            imageUrl={item.imageUrl}
                            />
                        ))
                    }
                </div>
            </div>
        </Container>
    );
};
