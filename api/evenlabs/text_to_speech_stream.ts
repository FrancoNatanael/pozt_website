import { ElevenLabsClient } from "elevenlabs";
import * as dotenv from "dotenv";

dotenv.config();

const ELEVENLABS_API_KEY = "sk_94e8673ce1e0c667265b3d7965eb20cdb4d47a6824b262bc";

if (!ELEVENLABS_API_KEY) {
  throw new Error("Missing ELEVENLABS_API_KEY in environment variables");
}

const client = new ElevenLabsClient({
  apiKey: ELEVENLABS_API_KEY,
});

export const createAudioStreamFromText = async (
  text: string,
  speaker: string
): Promise<Buffer> => {
  const audioStream = await client.generate({
    voice: speaker,
    model_id: "eleven_turbo_v2",
    text,
  });

  const chunks: Buffer[] = [];
  for await (const chunk of audioStream) {
    chunks.push(chunk);
  }

  const content = Buffer.concat(chunks);
  return content;
};