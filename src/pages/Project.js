import React, { useEffect, useState } from "react";

const Project = () => {
  const [projects, setAllprojects] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/data`)
      .then((res) => res.json())
      .then((data) => {
        setAllprojects(data.data);
        // console.log(projects);
      });
  }, []);
  return (
    <div>
      <div className="overflow-x-auto w-full mt-12 rounded-lg border-2">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl p-6">Project:{projects.length}</h2>
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
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* details */}

            {projects.slice(0, 5).map((project, index) => (
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
                          src="/tailwind-css-component-profile-3@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{project.topic}</div>
                    </div>
                  </div>
                </td>
                <td>
                  Carroll Group
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Tax Accountant
                  </span>
                </td>
                <td>Red</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}

            <tr>
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
                        src="/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span className="badge badge-ghost badge-sm">
                  Tax Accountant
                </span>
              </td>
              <td>Red</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Project;
