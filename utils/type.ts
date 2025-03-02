import { z } from "zod";

export type JobType = {
    id: number;
    title: string;
    description: string;
  };
  
  export enum JobStatus {
    Pending = 'pending',
    Interview = 'interview',
    Declined = 'declined',
  }
  

  export const createAndEditJobSchema = z.object({
    title: z.string().min(2).max(50),
    description: z.string().min(2).max(50),
  });
  
  export type CreateAndEditJobType = z.infer<typeof createAndEditJobSchema>;