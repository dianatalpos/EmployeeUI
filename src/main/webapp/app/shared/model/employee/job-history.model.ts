import dayjs from 'dayjs';
import { IJob } from 'app/shared/model/employee/job.model';
import { IDepartment } from 'app/shared/model/employee/department.model';
import { IEmployee } from 'app/shared/model/employee/employee.model';
import { Language } from 'app/shared/model/enumerations/language.model';

export interface IJobHistory {
  id?: number;
  startDate?: string | null;
  endDate?: string | null;
  language?: Language | null;
  job?: IJob | null;
  department?: IDepartment | null;
  employee?: IEmployee | null;
}

export const defaultValue: Readonly<IJobHistory> = {};
