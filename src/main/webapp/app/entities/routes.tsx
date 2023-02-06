import React from 'react';
import { Route } from 'react-router-dom';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import { ReducersMapObject, combineReducers } from '@reduxjs/toolkit';

import getStore from 'app/config/store';

import entitiesReducers from './reducers';

import Region from './employee/region';
import Country from './employee/country';
import Location from './employee/location';
import Task from './employee/task';
import Job from './employee/job';
import Employee from './employee/employee';
import Department from './employee/department';
import JobHistory from './employee/job-history';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  const store = getStore();
  store.injectReducer('managementui', combineReducers(entitiesReducers as ReducersMapObject));
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="region/*" element={<Region />} />
        <Route path="country/*" element={<Country />} />
        <Route path="location/*" element={<Location />} />
        <Route path="task/*" element={<Task />} />
        <Route path="job/*" element={<Job />} />
        <Route path="employee/*" element={<Employee />} />
        <Route path="department/*" element={<Department />} />
        <Route path="job-history/*" element={<JobHistory />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
