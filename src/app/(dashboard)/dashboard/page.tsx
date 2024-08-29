import { FC } from "react";
import Button from "@/components/ui/Button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

interface PageProps {}

const Page: FC<PageProps> = async ({}) => {
    const session = await getServerSession(authOptions);
    return <div>Dashboard</div>;
};
export default Page;
