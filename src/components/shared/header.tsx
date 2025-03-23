import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/shared/container";
import { FilterButtons } from "./filter";

interface Props {
    className?: string;
}

const buttons = ['Добавить'];

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className="flex items-center justify-center pt-5">
            <Container className="flex items-center justify-between py-8 inline-flex gap-1 bg-gray-50 p-1 rounded-2xl w-full">
                <FilterButtons />
                <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
                    {
                        buttons.map((button, index) => (
                            <button className={cn('flex items-center font-bold h-11 rounded-2xl px-5 bg-white shadow-md shadow-gray-200 text-primary cursor-pointer hover:bg-gray-50 transition duration-300 ease-in-out', className)}
                            key={index}>
                                {button}
                            </button>
                        ))
                    }
                </div>
            </Container>
        </header>
    );
};
