import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from "../assets/wrappers/JobsContainer";
import { getAllJobs } from '../features/allJobs/allJobsSlice';
import Job from './Job';
import Loading from './Loading';

const JobsContainer = () => {
    const {jobs,isLoading,page,totalJobs,numOfPages}=useSelector((store)=>store.allJobs)
    const dispatch=useDispatch()
console.log(jobs);
    useEffect(() => {
      dispatch(getAllJobs())
    
     
    }, [])
    

    if(isLoading){
        return (
        <Loading center/>
        )
    }
    if(jobs.lenght === 0){
        return (
            <Wrapper>
                <h2>No jobs to display...</h2>
            </Wrapper>
        )
    }
  return (
    <Wrapper>
        <h5>Jobs Info</h5>
        <div className="jobs">
            {jobs.map((job)=>{
                return <Job key={job._id} {...job}/>
            })}
        </div>
    </Wrapper>
  )
}

export default JobsContainer