import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../assets/wrappers/JobsContainer";
import { Job, Loading, PaginationContainer } from "../components";
import { getAllJobs } from "../features/allJobs/allJobsSlice";

const JobsContainer = () => {
  const {
    isLoading,
    jobs,
    numOfPages,
    page,
    totalJobs,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
    // eslint-disable-next-line
  }, [page, search, searchStatus, searchType, sort]);

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
      <h5>
        {totalJobs} job{jobs.length > 1 ? "s" : null} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {numOfPages > 1 && <PaginationContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
