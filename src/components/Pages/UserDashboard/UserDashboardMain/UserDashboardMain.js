import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import UserDashboardSidebar from '../UserDashboardSidebar/UserDashboardSidebar';
import './UserDashboardMain.css';

const UserDashboardMain = () => {
    // dashboard open and closed switch
    const [dbSwitch, setDbSwitch] = useState(false);
    const dashboardSwitch = { dbSwitch, setDbSwitch };



    return (
        //main admin dashboard section
        <section className="flex bg-[#ffff] dark:bg-[#0F172A]">
            {/* admin sidebar */}
            <div
                className={` bg-[#f3f3f3] dark:bg-[#0F172A]  min-h-screen duration-500 ease-in-out ${dbSwitch ? 'w-[17%] min-w-[15rem]' : 'w-[5rem]'
                    }`}
            >
                <UserDashboardSidebar dashboardSwitch={dashboardSwitch} />
            </div>

            {/* admin component render */}
            <div className={`bg-[#ffff] dark:bg-[#0F172A] min-w-[83%] w-full p-5`}>
                <Outlet></Outlet>
            </div>
        </section>
    );
};

export default UserDashboardMain;
