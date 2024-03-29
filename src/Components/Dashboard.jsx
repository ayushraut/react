import React from "react";
import data from "../c1";
import tdata from "./c6";
import { Link } from "react-router-dom";
import Apex from "./Apex";
import Line from "./Line";
import Graph from "./Graph";

const Dashboard = () => {
  console.log(data);
  console.log(tdata);

  return (
    <div>
      {/* Side Bar */}

      <div classNameName="container-fluid m-2 " style={{ height: "60rem" }}>
        <div className="row flex-nowrap ">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-white ">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100 ">
              <a
                href="/"
                className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none  "
              >
                <span className="fs-5 d-none d-sm-inline">Salesway</span>
              </a>
              <ul
                className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
                id="menu"
              >
                <li className="nav-item">
                  <Link to="/" href="#" className="nav-link align-middle px-0">
                    <i className="bi bi-gear fs-2x text-dark"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-dark">
                      Settings
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    href="#submenu1"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="bi bi-person-fill text-dark"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-dark ">
                      Team
                    </span>{" "}
                  </Link>
                  <ul
                    className="collapse show nav flex-column ms-1"
                    id="submenu1"
                    data-bs-parent="#menu"
                  >
                    <li className="w-100">
                      <a href="#" className="nav-link px-0 text-dark">
                        {" "}
                        <span className="d-none d-sm-inline text-dark">
                          Menu
                        </span>{" "}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="bi bi-grid-1x2-fill text-dark"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-dark">
                      Dashboard
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu2"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle "
                  >
                    <i className="bi bi-bar-chart-fill text-dark"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-dark">
                      Campaigns
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#submenu3"
                    data-bs-toggle="collapse"
                    className="nav-link px-0 align-middle"
                  >
                    <i className="bi bi-diagram-3-fill text-dark"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-dark">
                      Flows
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="bi bi-plug-fill text-dark"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-dark">
                      Integrations
                    </span>{" "}
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-0 align-middle">
                    <i className="fs-4 bi-people text-dark"></i>{" "}
                    <span className="ms-1 d-none d-sm-inline text-dark">
                      Customers
                    </span>{" "}
                  </a>
                </li>
              </ul>
              <hr />
              <div className="dropdown pb-4">
                <a
                  href="#"
                  className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
                  id="dropdownUser1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="hugenerd"
                    width="30"
                    height="30"
                    className="rounded-circle"
                  />
                  <span className="d-none d-sm-inline mx-1">Tom Wang</span>
                </a>
                <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      New project...
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Profile
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main */}

          <div className="col py-2 shadow-lg">
            <div class="container-fluid mt-3  ">
              <div class="row">
                <div class="col-sm-12">
                  <div class="card  ">
                    <div class="card-header bg-white ">
                      <h5>Dashboard</h5>
                    </div>

                    <div class="row p-2">
                      <div class="col-sm-4 mb-3 mb-sm-0">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Purchase</h5>
                            <p class="card-text">{data.Purchases}</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Revenue</h5>
                            <p class="card-text">{data.Revenue}</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-sm-4 mb-3 mb-sm-0">
                        <div class="card">
                          <div class="card-body">
                            <h5 class="card-title">Refunds</h5>
                            <p class="card-text">{data.Refunds}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <h5 className="p-1">Comparison</h5>

                    {<Line />}

                    <h5 className="p-1"> Top Products</h5>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Product</th>
                          <th scope="col">Sold amount</th>
                          <th scope="col">Unit Price</th>
                          <th scope="col">Revenue</th>
                          <th scope="col">Rating</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tdata.map((ele) => {
                          return (
                            <>
                              <tr>
                                <th scope="row">{ele.Product}</th>
                                <td>{ele.sold_amount}</td>
                                <td>{ele.unit_price}</td>
                                <td>{ele.revenue}</td>
                                <td>{ele.rating}</td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex flex-column" style={{ width: "20rem" }}>
            <div class="card m-1" style={{ height: "25rem" }}>
              <div class="card-body mb-5">
                {<Apex />}
                <p class="text-center">Of 100% points</p>
                <hr></hr>
                <h5 class="card-text">You're good!</h5>
                <p>
                  Youre sales performance score is better than 80% other users
                </p>
                <button className="btn btn-outline-warning">
                  Improve your score
                </button>
              </div>
            </div>

            {/* <div class="card m-1 pb-1">
              <div class="card-body">
                <h3 class="card-title">Customers by device</h3>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  Card subtitle
                </h6>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </div> */}

            <div class="card m-1 mt-1">
              <div class="card-body">
                <h6 class="card-title">Community feedback</h6>
                <h2 class="card-subtitle mb-2 text-body-secondary">
                  Mostly Positive
                </h2>
                <br></br>
                <div class="progress">
                  <div
                    class="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "15%" }}
                    aria-valuenow="15"
                    aria-valuemin="0"
                    aria-valuemax="15"
                  ></div>
                  <div
                    class="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow="30"
                    aria-valuemin="0"
                    aria-valuemax="30"
                  ></div>
                  <div
                    class="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "55%" }}
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="55"
                  ></div>
                </div>
                <br></br>
                <ul className="ps-1">
                  <span href="#" class="card-link">
                    Negative
                  </span>
                  <span href="#" class="card-link">
                    Neutral
                  </span>
                  <span href="#" class="card-link">
                    Positive
                  </span>
                </ul>
                <ul className="ps-1">
                  <span className="me-3" href="#" class="card-link">
                    12
                  </span>
                  <span className="ms-5" href="#" class="card-link">
                    34
                  </span>
                  <span className="ms-5" href="#" class="card-link">
                    134
                  </span>
                </ul>
              </div>
            </div>
          </div>

          {/* Side Cards */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
