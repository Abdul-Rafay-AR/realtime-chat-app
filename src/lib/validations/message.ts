import { timeStamp } from "console";
import { z } from "zod";

export const messageValidtor = z.object({
    id: z.string(),
    senderId: z.string(),
    text: z.string(),
    timestamp: z.number(),
});

export const messageArrayValidator = z.array(messageValidtor);

export type Message = z.infer<typeof messageValidtor>;
