import { FC } from "react";
import Button from "@/components/ui/button";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
    return (
        <div>
            page
            <Button variant="ghost">Hello World!</Button>
        </div>
    );
};
export default page;
