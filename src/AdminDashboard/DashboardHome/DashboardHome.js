import React from 'react';
import {
  LineChart,
  PieChart,
  BarChart,
  Pie,
  Bar,
  Cell,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import chart from '../../images/line-chart.png';

const DashboardHome = () => {
  const data = [
    {
      name: 'Page A',
      interview: 4000,
      hired: 2400,
      amt: 2400,
      month: 'jan',
    },
    {
      name: 'Page B',
      interview: 3000,
      hired: 1398,
      amt: 2210,
      month: 'feb',
    },
    {
      name: 'Page C',
      interview: 2000,
      hired: 9800,
      amt: 2290,
      month: 'mar',
    },
    {
      name: 'Page D',
      interview: 2780,
      hired: 3908,
      amt: 2000,
      month: 'apr',
    },
    {
      name: 'Page E',
      interview: 1890,
      hired: 4800,
      amt: 2181,
      month: 'may',
    },
    {
      name: 'Page F',
      interview: 2390,
      hired: 3800,
      amt: 2500,
      month: 'june',
    },
    {
      name: 'Page G',
      interview: 3490,
      hired: 4300,
      amt: 2100,
      month: 'july',
    },
  ];

  const data01 = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  const data02 = [
    { name: 'A1', value: 100 },
    { name: 'A2', value: 300 },
    { name: 'B1', value: 100 },
    { name: 'B2', value: 80 },
    { name: 'B3', value: 40 },
    { name: 'B4', value: 30 },
    { name: 'B5', value: 50 },
    { name: 'C1', value: 100 },
    { name: 'C2', value: 200 },
    { name: 'D1', value: 150 },
    { name: 'D2', value: 50 },
  ];

  return (
    <div>
      {/* wellcome  */}

      <div className="flex justify-between ">
        <div className="w-[30%]">
          <h1 className="admin-heading-color">Hi Welcome ! </h1>
          <h1 className="admin-heading-color text-[1.25rem]">
            Our Dashboard ,
          </h1>
        </div>
        <div className="admin-border-right">
          <span className="admin-normal-color">Balance</span>
          <h1 className="admin-heading-color text-[1.25rem]">$40079.60 M</h1>
        </div>
        <div className="admin-border-right">
          <span className="admin-normal-color">Today’s profit</span>
          <h1 className="admin-heading-color text-[1.25rem]">$175.00 M</h1>
        </div>
        <div className="admin-border-right">
          <span className="admin-normal-color">Purchases</span>
          <h1 className="admin-heading-color text-[1.25rem]">406</h1>
        </div>
        <div>
          <span className="admin-normal-color">Downloads</span>
          <h1 className="admin-heading-color">40079</h1>
        </div>
        <div>
          <button className="admin-btn-yellow">Downloades</button>
        </div>
      </div>

      {/* card  */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-4 mt-8">
        {/* card 1  */}
        <div className="flex justify-between admin-card-bg admin-shadow py-[1.25rem] px-[1.437rem]">
          <div className="">
            <h1 className="text-[#b1b1b5] text-[14px]  mb-3 font-semibold">
              Number Of Developer
            </h1>
            <h1 className="text-[#b1b1b5] text-[1.875rem] admin-heading-font-weight">
              30340
            </h1>
            <p className=" mt-1 text-warning">
              2.00%
              <span className="">
                <small className="admin-normal-color ml-2">(30 days)</small>
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center">
            {/* <i className="fa-solid admin-icon-color fa-calendar "></i> */}
            <i className="fa-solid admin-icon-color fa-laptop-code text-[1.875rem]"></i>
          </div>
        </div>

        {/* card 2  */}
        <div className="flex justify-between admin-card-bg admin-shadow py-[1.25rem] px-[1.437rem]">
          <div className="">
            <h1 className="text-[#b1b1b5] text-[14px]  mb-3 font-semibold">
              Number Of Client
            </h1>
            <h1 className="text-[#b1b1b5] text-[1.875rem] admin-heading-font-weight">
              47003
            </h1>
            <p className=" mt-1 text-[#ff4747]">
              0.22%
              <span className="">
                <small className="admin-normal-color ml-2">(30 days)</small>
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center">
            {/* <i className="fa-solid admin-icon-color fa-calendar "></i> */}
            <i className="fa-solid admin-icon-color fa-user-tie text-[1.875rem]"></i>
          </div>
        </div>

        {/* card 3   */}
        <div className="flex justify-between admin-card-bg admin-shadow py-[1.25rem] px-[1.437rem]">
          <div className="">
            <h1 className="text-[#b1b1b5] text-[14px]  mb-3 font-semibold">
              Today Hires
            </h1>
            <h1 className="text-[#b1b1b5] text-[1.875rem] admin-heading-font-weight">
              4002
            </h1>
            <p className=" mt-1 text-success">
              10.00%
              <span className="">
                <small className="admin-normal-color ml-2">(30 days)</small>
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center">
            {/* <i className="fa-solid admin-icon-color fa-calendar "></i> */}
            <i className="fa-solid admin-icon-color fa-address-book text-[1.875rem]"></i>
          </div>
        </div>
        {/* card 4  */}
        <div className="flex justify-between admin-card-bg admin-shadow py-[1.25rem] px-[1.437rem]">
          <div className="">
            <h1 className="text-[#b1b1b5] text-[14px]  mb-3 font-semibold">
              Number Of Mettings
            </h1>
            <h1 className="text-[#b1b1b5] text-[1.875rem] admin-heading-font-weight">
              30340
            </h1>
            <p className=" mt-1 text-success">
              22.00%
              <span className="">
                <small className="admin-normal-color ml-2">(30 days)</small>
              </span>
            </p>
          </div>
          <div className="flex justify-center items-center">
            {/* <i className="fa-solid admin-icon-color fa-calendar "></i> */}
            <i className="fa-solid admin-icon-color fa-layer-group text-[1.875rem]"></i>
          </div>
        </div>
      </div>

      {/* chart  */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-8">
        <div className="admin-card-bg admin-shadow py-[1.25rem] px-[1.437rem]">
          <h1 className="text-[#b1b1b5] font-semibold">Meeting And Hired</h1>
          <p className="admin-normal-color my-4">
            The total number of sessions within the date range. It is the period
            time a user is actively engaged with your website, page or app, etc
          </p>

          <div>
            <div className="flex justify-between">
              <div className="">
                <span className="admin-normal-color">Order Value</span>
                <h1 className="admin-heading-color text-[1.875rem]">14k</h1>
              </div>
              <div className="">
                <span className="admin-normal-color">Orders</span>
                <h1 className="admin-heading-color text-[1.875rem]">457</h1>
              </div>
              <div className="">
                <span className="admin-normal-color">Users</span>
                <h1 className="admin-heading-color text-[1.875rem]">40689</h1>
              </div>
              <div className="">
                <span className="admin-normal-color">Downloads</span>
                <h1 className="admin-heading-color text-[1.875rem]">1004</h1>
              </div>
            </div>
          </div>
          <div className="mt-8">
            <LineChart height={338} data={data} className="w-full">
              <Line
                type="monotone"
                dataKey="hired"
                stroke="#8884d8"
                strokeWidth={2}
              />
              <XAxis dataKey="name" />
              <YAxis />
            </LineChart>
            <img src={chart} alt="" />
          </div>
        </div>
        <div className="admin-card-bg admin-shadow py-[1.25rem] px-[1.437rem]">
          <h1 className="text-[#b1b1b5] font-semibold">Meeting Reports</h1>
          <p className="admin-normal-color my-4">
            The total number of sessions within the date range. It is the period
            time a user is actively engaged with your website
          </p>
          <div className="mt-8 w-[100%] h-[20rem]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="hired" stackId="a" fill="#FF4747" />
                <Bar dataKey="interview" stackId="a" fill="#258AFC" />
              </BarChart>
            </ResponsiveContainer>

            {/* <img src={barChart} alt="" /> */}
          </div>
        </div>
      </div>

      {/* todo */}

      <div className="grid gap-8 grid-cols-1 md:grid-cols-5 mt-8">
        <div className="admin-card-bg admin-shadow py-[1.25rem] px-[1.437rem] col-span-3">
          <h1 className="admin-heading-color">Hiring Status</h1>
          <table className="w-full  admin-normal-color ">
            <thead>
              <tr>
                <th className="flex">Name</th>
                <th>Salary</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="admin-bg">
                <td>Node Js Developer</td>
                <td>$3783</td>
                <td>22 july 2022</td>
                <td className="font-weight-medium text-success">Completed</td>
              </tr>
              <tr>
                <td>React js Developer</td>
                <td>$678</td>
                <td>7 january 2022</td>
                <td className="font-weight-medium text-warning">Pending</td>
              </tr>
              <tr className="admin-bg">
                <td>Full-Stack Developer</td>
                <td>$879</td>
                <td>30 february 2022</td>
                <td className="font-weight-medium text-success">Completed</td>
              </tr>

              <tr>
                <td>Front-end Developer</td>
                <td>$1123</td>
                <td>22 july 2022</td>
                <td className="font-weight-medium text-[#ff4747]">Cancelled</td>
              </tr>
              <tr className="admin-bg">
                <td>Software Engineer</td>
                <td>$6867</td>
                <td>22 july 2022</td>
                <td className="font-weight-medium text-success">Completed</td>
              </tr>
              <tr>
                <td>Backend Developer</td>
                <td>$3783</td>
                <td>7 april 2022</td>
                <td className="font-weight-medium text-warning">Pending</td>
              </tr>
              <tr className="admin-bg">
                <td>Node Js Developer</td>
                <td>$6767</td>
                <td>2 june 2022</td>
                <td className="font-weight-medium text-[#ff4747]">Cancelled</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="admin-card-bg admin-shadow py-[1.25rem] px-[1.437rem] col-span-2 admin-normal-color">
          <h1 className="admin-heading-color mb-4">To Do list</h1>

          <ul>
            <li className="py-[1.063rem] px-[1.4rem] todo-border flex justify-between mb-[0.812rem]">
              <span>Level up for Antony</span>{' '}
              <i className="fa-solid fa-xmark text-[1rem] text-[#248afd]"></i>
            </li>
            <li className="py-[1.063rem] px-[1.4rem] todo-border flex justify-between mb-[0.812rem]">
              <span>Meeting with john doe</span>{' '}
              <i className="fa-solid fa-xmark text-[1rem] text-[#248afd]"></i>
            </li>
            <li className="py-[1.063rem] px-[1.4rem] todo-border flex justify-between mb-[0.812rem]">
              <span>Project meeting with CEO</span>{' '}
              <i className="fa-solid fa-xmark text-[1rem] text-[#248afd]"></i>
            </li>
            <li className="py-[1.063rem] px-[1.4rem] todo-border flex justify-between mb-[0.812rem]">
              <span>Metting with lead lead</span>{' '}
              <i className="fa-solid fa-xmark text-[1rem] text-[#248afd]"></i>
            </li>
            <li className="py-[1.063rem] px-[1.4rem] todo-border flex justify-between mb-[0.812rem]">
              <span>Level up for Antony</span>{' '}
              <i className="fa-solid fa-xmark text-[1rem] text-[#248afd]"></i>
            </li>
          </ul>

          <div className="flex justify-between mt-6">
            <input
              className="bg-transparent border-0 focus:outline-none"
              placeholder="Add new task"
              type="text"
              name=""
              id=""
            />
            <i className="fa-solid fa-paper-plane text-[#248afd] text-[2.25rem]"></i>
          </div>
        </div>
      </div>

      {/* details repot */}

      <div className="admin-card-bg admin-shadow py-[1.25rem] mt-8 px-[1.437rem]">
        <h1 className="admin-heading-color">Detail report</h1>
        <div className="grid grid-cols-1  md:grid-cols-12 gap-8 ">
          <div className="col-span-4  flex flex-col justify-center">
            <h1 className="text-[3rem] admin-heading-color">8778373</h1>
            <h1 className="text-[1.875rem] font-simple admin-normal-color mb-3">
              Total Hired
            </h1>
            <p className="admin-normal-color">
              The total number of sessions within the date range. It is the
              period time a user is actively engaged with your website, page or
              app, etc
            </p>
          </div>

          <div className="col-span-8 my-[.8rem]">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="grid grid-cols-12">
                <div className="col-span-4">
                  <ul className="admin-normal-color h-[100%] flex flex-col justify-between">
                    <li className="">Bangladesh</li>
                    <li className="">Usa</li>
                    <li className="">India</li>
                    <li className="">France</li>
                    <li className="">Germany</li>
                    <li className="">Argentina</li>
                  </ul>
                </div>
                <div className="col-span-8 flex flex-col justify-between">
                  <div className="text-white">
                    <div className="admin-bg h-[.7rem]">
                      <div className="h-full w-[55%] bg-[#71c016]"></div>
                    </div>
                  </div>
                  <div className="text-white">
                    <div className="admin-bg h-[.7rem]">
                      <div className="h-full w-11/12 bg-[#f5a623]"></div>
                    </div>
                  </div>
                  <div className="text-white">
                    <div className="admin-bg h-[.7rem]">
                      <div className="h-full w-[70%] bg-[#ff4747]"></div>
                    </div>
                  </div>
                  <div className="text-white ">
                    <div className="admin-bg h-[.7rem]">
                      <div className="h-full w-[80%] bg-[#68afff]"></div>
                    </div>
                  </div>
                  <div className="text-white">
                    <div className="admin-bg h-[.7rem]">
                      <div className="h-full w-[30%] bg-[#71c016]"></div>
                    </div>
                  </div>
                  <div className="text-white ">
                    <div className="admin-bg h-[.7rem]">
                      <div className="h-full w-[70%] bg-[#ff4747]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-[100%] h-[20rem]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart width={400} height={400}>
                    <Pie
                      data={data01}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      outerRadius={60}
                      fill="#ff4747"
                    />
                    <Pie
                      data={data02}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={90}
                      fill="#71c016"
                      label
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
