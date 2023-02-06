import { ITask } from 'app/shared/model/employee/task.model';
import { IEmployee } from 'app/shared/model/employee/employee.model';

export interface IJob {
  id?: number;
  jobTitle?: string | null;
  minSalary?: number | null;
  maxSalary?: number | null;
  tasks?: ITask[] | null;
  employee?: IEmployee | null;
}

export const defaultValue: Readonly<IJob> = {};
