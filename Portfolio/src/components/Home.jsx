import React from "react";

export default function Home() {
  const name = "Ayush Nandi";
  return (
    <div>
      <div className="bg-bgHome w-full justify-center h-[130vh] ">
        <div className="flex pl-[8rem] justify-between items-center pr-[3rem] w-full h-[5rem]">
          <div className=" text-4xl MDPrimer text-sk1">
            AYUSH NANDI
          </div>
          <div className="flex justify-between MDPrimer pl-[5rem] w-[35%] gap-[2rem] text-[1rem] font-semibold text-sk1">
            <div>
              <h6>Projects</h6>
            </div>
            <div>
              <h6>About</h6>
            </div>
            <div>
              <h6>Skills</h6>
            </div>
            <div>
              <h6>Contact</h6>
            </div>
            <div></div>
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center">
            <div className="text-sk1">
              <h1 className="text-[8rem] mt-[-1rem] flex loda">WEB DEVELOPER</h1>
            </div>
          </div>

          <div>
            <div className="text-sk1 pl-[10%] mt-[-1rem]">
              <div className="flex gap-x-[8rem] w-[70%]">
                <div>
                  <p className="text-[14px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce vel pretium orci, sit amet blandit libero. Etiam
                    imperdiet urna id neque commodo gravida. Nunc euismod non
                    magna eget tincidunt
                  </p>
                </div>
                <div>
                  <p className="text-[14px]">
                    Duis cursus vestibulum augue, sed ultrices augue tincidunt
                    eu. Aliquam viverra velit non sapien pulvinar, eu tristique
                    ante iaculis. Etiam accumsan facilisis maximus.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="m-10"></div>
          <div>
            <img src="../../public/svg/grd.svg" className="h-[25rem]" alt="" />
            {/* <img src="../../public/img/ayush.png" className="p-[rem]" alt="" /> */}
          </div>
          
        </div>
      </div>
    </div>
  );
}
