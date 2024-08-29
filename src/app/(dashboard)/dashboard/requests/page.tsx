import FriendRequests from "@/components/ui/FriendRequests";
import { fetchRedis } from "@/helpers/redis";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { FC } from "react";

const Page: FC = async ({}) => {
    const session = await getServerSession(authOptions);
    if (!session) {
        redirect("/login");
    }

    const incomingSenderIds = (await fetchRedis(
        "smembers",
        `user:${session.user.id}:incoming_friend_requests`
    )) as string[];

    const incomingFriendRequests = await Promise.all(
        incomingSenderIds.map(async (senderId) => {
            const sender = JSON.parse(
                (await fetchRedis("get", `user:${senderId}`)) as string
            ) as User;
            return {
                senderId,
                senderEmail: sender.email,
            };
        })
    );

    return (
        <main className="pt-8">
            <h1 className="font-bold text-5xl mb-8">Friend Requests</h1>
            <div className="flex flex-col gap-4">
                <FriendRequests
                    incomingFriendRequests={incomingFriendRequests}
                    sessionId={session.user.id}
                />
            </div>
        </main>
    );
};
export default Page;
