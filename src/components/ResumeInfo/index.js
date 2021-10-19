import React from "react";

function ResumeInfo() {
  return (
    <div className="container px-4 px-lg-5">
      <div className="row gx-4 gx-lg-5">
        <div className="col-lg-4 col-md-6 text-center">
          <div className="mt-5">
            <div className="mb-2">
              <i className="fas fa-gem mb-3 r-icons"></i>
            </div>
            <h3 className="h4 mb-2">Front-end</h3>
            <ul>
              <li className="list-group-item text-muted">HTML</li>
              <li className="list-group-item text-muted">CSS</li>
              <li className="list-group-item text-muted">JavaScript</li>
              <li className="list-group-item text-muted">jQuery</li>
              <li className="list-group-item text-muted">Git</li>
              <li className="list-group-item text-muted">React</li>
              <li className="list-group-item text-muted">Bootstrap</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 text-center">
          <div className="mt-5">
            <div className="mb-2">
              <i className="fas fa-coins mb-3 r-icons"></i>
            </div>
            <h3 className="h4 mb-2">Back-end</h3>
            <ul>
              <li className="list-group-item text-muted">APIs</li>
              <li className="list-group-item text-muted">Node</li>
              <li className="list-group-item text-muted">Express</li>
              <li className="list-group-item text-muted">
                MySQL, Sequelize, SQLite
              </li>
              <li className="list-group-item text-muted">MongoDB, Mongoose</li>
              <li className="list-group-item text-muted">REST</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 text-center">
          <div className="mt-5">
            <di className="mb-2">
              <i className="fas fa-laptop mb-3 r-icons"></i>
            </di>
            <h3 className="h4 mb-2">Additional Skills</h3>
            <ul>
              <li className="list-group-item text-muted">Photoshop</li>
              <li className="list-group-item text-muted">Genexus 16</li>
              <li className="list-group-item text-muted">Autocad</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeInfo;
