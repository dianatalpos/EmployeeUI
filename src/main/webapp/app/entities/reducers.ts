import region from 'app/entities/employee/region/region.reducer';
import country from 'app/entities/employee/country/country.reducer';
import location from 'app/entities/employee/location/location.reducer';
import task from 'app/entities/employee/task/task.reducer';
import job from 'app/entities/employee/job/job.reducer';
import employee from 'app/entities/employee/employee/employee.reducer';
import department from 'app/entities/employee/department/department.reducer';
import jobHistory from 'app/entities/employee/job-history/job-history.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  region,
  country,
  location,
  task,
  job,
  employee,
  department,
  jobHistory,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
