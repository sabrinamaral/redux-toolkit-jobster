import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/JobsContainer";
import { Job, Loading } from "../components";
import { getAllJobs } from "../features/allJobs/allJobsSlice";

const JobsContainer = () => {
  const { isLoading, jobs } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <Loading />
      </Wrapper>
    );
  }
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>There is no job to display.</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h5>jobs info</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
