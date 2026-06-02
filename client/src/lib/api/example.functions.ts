import { z } from "zod";

const greetingSchema = z.object({ name: z.string().min(1) });

// Example function for server-side requests
// This was previously a createServerFn, now converted to a standard fetch-based approach
export async function getGreeting(data: { name: string }) {
  const validated = greetingSchema.parse(data);
  
  // Example response - replace with actual API call if needed
  return {
    greeting: `Hello, ${validated.name}!`,
    mode: import.meta.env.MODE,
  };
}
