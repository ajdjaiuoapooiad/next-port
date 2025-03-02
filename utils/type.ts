
export type JobType = {
    id: number;
    description: string;
  };
  
  export enum JobStatus {
    Pending = 'pending',
    Interview = 'interview',
    Declined = 'declined',
  }
  