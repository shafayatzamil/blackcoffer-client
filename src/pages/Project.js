import React from "react";
import { useQuery } from "@tanstack/react-query";

const Project = () => {

  const {data:allProject=[]} =useQuery({
    queryKey:['data'],
    queryFn:async()=>{
      const res = await fetch(`http://localhost:5000/data`)
      const data = await res.json();
      return data.data;
    }
  })

  return (
    <div className="my-12">
      <div className="overflow-x-auto w-full mt-12 rounded-lg border-2">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl p-6">Project</h2>
          <div className="flex-none gap-2">
            <div className="form-control flex-row">
              <label className="label">
                <span className="label-text text-2xl">Search:</span>
              </label>
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered mr-6 "
              />
            </div>
          </div>
        </div>
        <hr />
        <table className="table w-full  ">
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Tropic</th>
              <th>Country</th>
              <th>Sector</th>
            </tr>
          </thead>
          <tbody>
            {/* details */}

            {allProject.slice(0,5).map((project, index) => (
              <tr key={project._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="https://images.unsplash.com/photo-1674217223849-51f430976834?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div >
                        <h2 className="font-bold">{project.title.split(" ").shift()}</h2>
                        <h5>{project.published.slice(0,16)}</h5>
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {project.pestle}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {project.topic}
                  </span>
                </td>
                <td>{project.country?project.country:"Null"}</td>
                
            
                 <td>{project.sector?project.sector:"NULL"}
                 <br />
                 <span>{project.source}</span>
                 </td>
                 
                
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Project;
