import React from "react";

const Notifications = () => {
  return (
    <section>
      {/* toast styles */}
      <section className="admin-card-bg m-6 p-5 rounded-md">
        <h4 className="admin-title">Toast Styles</h4>
        <p className="text-[#76838f] text-sm my-4">
          Click on the below buttons for notifications in different styles.
          <br />
          Specify the predefined types of toasts - success, info, warn and error
        </p>
        {/* button box */}
        <div className="flex justify-between items-center mt-10">
          <button className="px-9 py-3 rounded-md text-white text-base font-[500] border-none bg-[#5d9e12] hover:bg-[#4e8510] duration-300 ease-in-out ">
            Success
          </button>
          <button className="px-9 py-3 rounded-md text-white text-base font-[500] border-none bg-[#68afff] hover:bg-[#5a95da] duration-300 ease-in-out ">
            Info
          </button>
          <button className="px-9 py-3 rounded-md text-white text-base font-[500] border-none bg-[#f5a623] hover:bg-[#d08c1e] duration-300 ease-in-out ">
            Warning
          </button>
          <button className="px-9 py-3 rounded-md text-white text-base font-[500] border-none bg-[#ff4747] hover:bg-[#e44040] duration-300 ease-in-out ">
            Error
          </button>
        </div>
      </section>

      {/* toast Positions */}
      <section className="admin-card-bg m-6 p-5 rounded-md">
        <h4 className="admin-title">Toast Positions</h4>
        <p className="text-[#76838f] text-sm my-4">
          The position property can be used to specify the predefined positions
          of toasts.
          <br />
          Specify the predefined types of toasts - success, info, warn and error
        </p>

        {/* toast position button  */}
        <div className="flex items-center justify-between mt-10">
          <button className=" py-1 px-5 text-blue-600 bg-transparent border-2 border-blue-600 rounded-sm hover:bg-blue-600 hover:text-white duration-300 ease-in-out ">
            Top Left
          </button>
          <button className=" py-1 px-5 text-blue-600 bg-transparent border-2 border-blue-600 rounded-sm hover:bg-blue-600 hover:text-white duration-300 ease-in-out ">
            Top Center
          </button>
          <button className=" py-1 px-5 text-blue-600 bg-transparent border-2 border-blue-600 rounded-sm hover:bg-blue-600 hover:text-white duration-300 ease-in-out ">
            Top Right
          </button>
          <button className=" py-1 px-5 text-blue-600 bg-transparent border-2 border-blue-600 rounded-sm hover:bg-blue-600 hover:text-white duration-300 ease-in-out ">
            Bottom Left
          </button>
          <button className=" py-1 px-5 text-blue-600 bg-transparent border-2 border-blue-600 rounded-sm hover:bg-blue-600 hover:text-white duration-300 ease-in-out ">
            Bottom Center
          </button>
          <button className=" py-1 px-5 text-blue-600 bg-transparent border-2 border-blue-600 rounded-sm hover:bg-blue-600 hover:text-white duration-300 ease-in-out ">
            Bottom Right
          </button>
        </div>
      </section>

      {/* Bootstrap Alert */}
      <section className="admin-card-bg m-6 p-5 rounded-md grid grid-cols-2 gap-x-6">
        <div>
          <h4 className="admin-title">Bootstrap Alert</h4>
          <p className="text-[#76838f] text-sm my-4">
            Alerts are available for any length of text, as well as an optional
            dismiss button. For
            <br />
            proper styling, use one of the eight variants.
          </p>

          {/* Bootstrap Alert Box  */}
          <div>
            <p className="px-2 py-1 w-full my-4 text-base text-[#1b69c0] bg-[#2489fd45] border border-[#217fe9] rounded">
              This is a primary alert—check it out!
            </p>
            <p className="px-2 py-1 w-full my-4 text-base text-[#7c7d7d] bg-[#a3a4a53b] border border-[#969798] rounded">
              This is a secondary alert—check it out!
            </p>
            <p className="px-2 py-1 w-full my-4 text-base text-[#569211] bg-[#71c0163b] border border-[#68b114] rounded">
              This is a success alert—check it out!
            </p>
            <p className="px-2 py-1 w-full my-4 text-base text-[#c23636] bg-[#eb41413a] border border-[#eb4141] rounded">
              This is a danger alert—check it out!
            </p>
            <p className="px-2 py-1 w-full my-4 text-base text-[#ba7e1b] bg-[#e19a2036] border border-[#e19920] rounded">
              This is a warning alert—check it out!
            </p>
            <p className="px-2 py-1 w-full my-4 text-base text-[#4f85c2] bg-[#60a1eb35] border border-[#60a1eb] rounded">
              This is a info alert—check it out!
            </p>
            <p className="px-2 py-1 w-full my-4 text-base text-[#bcbdbe] bg-[#e4e5e62d] border border-[#e4e5e6] rounded">
              This is a light alert—check it out!
            </p>
            <p className="px-2 py-1 w-full my-4 text-base text-[#14181d] bg-[#181d2334] border border-[#181d23] rounded">
              This is a dark alert—check it out!
            </p>
          </div>
        </div>

        {/* Custom Alert box */}
        <div>
          <h4 className="admin-title">Custom Alert</h4>
          <p className="text-[#76838f] text-sm my-4">
            Alerts can contain whatever content you like. Headers, paragraphs,
            dividers, go crazy.
          </p>

          {/* Custom Alert massages box */}
          <div className="p-6 bg-[#a3a4a534] border border-[#a3a4a5] rounded">
            <p className="text-[#76838f] text-sm my-4">
              Well done! You successfully read this important alert message.
            </p>
            <div className="mt-10">
              <button className="px-6 py-2 rounded mr-8 bg-[#a3a4a5] hover:bg-[#7c7c7c] text-white duration-300 ease-in-out">
                Ok
              </button>
              <button className="px-6 py-2 rounded bg-[#5d5d5d] hover:bg-[#828282] text-[#aaa] duration-300 ease-in-out">
                Cancel
              </button>
            </div>
          </div>

          <div className="p-6 bg-[#68aeff3f] border border-[#68afff] my-10 rounded">
            <p className="text-[#76838f] text-sm my-4">
              Heads up! This alert needs your attention, but it's not super
              important.
            </p>
            <div className="mt-10">
              <button className="px-6 py-2 rounded mr-8 bg-[#68afff] hover:bg-[#5c9be2] text-white duration-300 ease-in-out">
                Ok
              </button>
              <button className="px-6 py-2 rounded bg-[#ffffff] hover:bg-[#c0c0c0] text-[#000] duration-300 ease-in-out">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Notifications;
