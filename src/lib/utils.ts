import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...input: ClassValue[]) {
    return twMerge(clsx(input));
}

export const toPusherKey = (key: string) => {
    return key.replace(/:/g, "__");
};

export function chatHrefConstructor(id1: string, id2: string) {
    const sortedIds = [id1, id2].sort();
    return `${sortedIds[0]}--${sortedIds[1]}`;
}
