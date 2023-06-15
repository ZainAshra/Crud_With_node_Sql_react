import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import {Link} from "react-router-dom"
const Student = () => {
    const [studetsData ,setStudentsData] = useState([])
  useEffect(() => {
    axios
      .get("http://localhost:8081/")
      .then((res) => {
        console.log(res)
        setStudentsData(res?.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="grid  text-gray-950">
      <div>
        <h1 className="font-bold"> Crud</h1>
      </div>
      <div className="flex">

       <Link to='/createStudent'> <button className="btn btn-success"> Add+</button></Link>
      </div>
      <div className="grid">
      {studetsData?.map((e,i)=>{
        return(
                  <div key={i}>
                  <span className="text-blue-900 cursor-pointer p-2 m-2 w-20">{e.ID}</span>
                    <span className="text-blue-900 cursor-pointer p-2  mr-10 ">{e.Name}</span>
                    <span className="text-blue-900 cursor-pointer p-2 m-2">{e.Email}</span>
                    <span><button className="btn border btn-success ml-24">update</button> <button className="border btn btn-danger m-2">Delte</button></span>
                    <hr/>
                  </div>)
      })}
        
      </div>
    </div>
  );
};

export default Student;
