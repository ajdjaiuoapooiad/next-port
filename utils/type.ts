
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
  