import Wrapper from "../assets/wrappers/SearchContainer";
import { useSelector, useDispatch } from "react-redux";
import FormRowSelect from "./FormRowSelect";
import FormRow from "./FormRow";
import { clearFilters, handleChange } from "../features/allJobs/allJobsSlice";
import { useMemo, useState } from "react";

const SearchContainer = () => {
  const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
    useSelector((store) => store.allJobs);
  const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const [localSearch, setLocalSearch] = useState("");
    const handleSearch = (e) => {
      
          dispatch(
            handleChange({ name: e.target.name, value: e.target.value }))
          
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(clearFilters())
    };
const debounce = () => {
  let timeoutID;
  return (e) => {
    setLocalSearch(e.target.value);
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => {
      dispatch(handleChange({ name: e.target.name, value: e.target.value }));
    }, 1000);
  };
};
const optimizedDebounce = useMemo(() => debounce(), []);

  return (
    <Wrapper>
      <form className="form">
        <h4>search form</h4>
        <div className="form-center">
          {/* search position */}

          <FormRow
            type="text"
            name="search"
            value={localSearch}
            handleChange={optimizedDebounce}
          />
          {/* search by status */}
          <FormRowSelect
            labelText="status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={["all", ...statusOptions]}
          />
          {/* search by type */}
          <FormRowSelect
            labelText="type"
            name="searchType"
            value={searchType}
            handleChange={handleSearch}
            list={["all", ...jobTypeOptions]}
          />
          {/* sort */}
          <FormRowSelect
            name="sort"
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <button
            className="btn btn-block btn-danger"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};

export default SearchContainer;
