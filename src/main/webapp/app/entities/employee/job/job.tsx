import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IJob } from 'app/shared/model/employee/job.model';
import { getEntities } from './job.reducer';

export const Job = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const jobList = useAppSelector(state => state.managementui.job.entities);
  const loading = useAppSelector(state => state.managementui.job.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  return (
    <div>
      <h2 id="job-heading" data-cy="JobHeading">
        Jobs
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} /> Refresh list
          </Button>
          <Link to="/job/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp; Create a new Job
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {jobList && jobList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>ID</th>
                <th>Job Title</th>
                <th>Min Salary</th>
                <th>Max Salary</th>
                <th>Task</th>
                <th>Employee</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {jobList.map((job, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/job/${job.id}`} color="link" size="sm">
                      {job.id}
                    </Button>
                  </td>
                  <td>{job.jobTitle}</td>
                  <td>{job.minSalary}</td>
                  <td>{job.maxSalary}</td>
                  <td>
                    {job.tasks
                      ? job.tasks.map((val, j) => (
                          <span key={j}>
                            <Link to={`/task/${val.id}`}>{val.title}</Link>
                            {j === job.tasks.length - 1 ? '' : ', '}
                          </span>
                        ))
                      : null}
                  </td>
                  <td>{job.employee ? <Link to={`/employee/${job.employee.id}`}>{job.employee.id}</Link> : ''}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/job/${job.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" /> <span className="d-none d-md-inline">View</span>
                      </Button>
                      <Button tag={Link} to={`/job/${job.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" /> <span className="d-none d-md-inline">Edit</span>
                      </Button>
                      <Button tag={Link} to={`/job/${job.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
                        <FontAwesomeIcon icon="trash" /> <span className="d-none d-md-inline">Delete</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && <div className="alert alert-warning">No Jobs found</div>
        )}
      </div>
    </div>
  );
};

export default Job;
