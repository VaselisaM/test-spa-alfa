import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { FilterButtons } from "./filter";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    return (
        <header className={cn('shadow-lg', className)}>
            <Container className="flex items-center justify-between py-8">
                <FilterButtons />
            </Container>
        </header>
    );
};