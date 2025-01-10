export interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'Not Started' | 'In Progress' | 'On Hold' | 'Completed';
  progress: number;
}

export interface Task {
  id: string;
  projectId: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  status: 'Todo' | 'In Progress' | 'Review' | 'Done';
  assignee: string;
  progress: number;
}

export interface Resource {
  id: string;
  name: string;
  role: string;
  availability: number;
  skills: string[];
}

export interface Risk {
  id: string;
  projectId: string;
  title: string;
  description: string;
  impact: 'Low' | 'Medium' | 'High';
  probability: 'Low' | 'Medium' | 'High';
  status: 'Open' | 'Mitigated' | 'Closed';
}