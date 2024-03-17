import React from "react";

export default function skills() {
  return (
    <div className=" w-[100%] ">
      <div>
        <div className="m-10"></div>
        <div className="flex justify-center">
          <h1 className="text-sk1 text-[2.3rem] PoppinsBold">SKILLS AND TOOLS</h1>
        </div>
      </div>
      <div>
        <div className="text-sk1 flex justify-center mt-[1.2rem]">
          <div className="flex m-5 gap-x-[8rem] w-[80%]">
            <div className="flex items-center">
              <img
                src="../../public/svg/java.svg"
                className="h-[4rem] mx-5"
                alt=""
              />
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vel pretium orci, sit amet blandit libero. Etiam imperdiet urna
                id neque commodo gravida. Nunc euismod non magna eget tincidunt
              </p>
            </div>
            <div className="flex items-center">
              <img
                src="../../public/svg/python.svg"
                className="h-[4rem] mx-5"
                alt=""
              />
              <p className="text-[14px]">
                Duis cursus vestibulum augue, sed ultrices augue tincidunt eu.
                Aliquam viverra velit non sapien pulvinar, eu tristique ante
                iaculis. Etiam accumsan facilisis maximus.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[100%] flex justify-end my-[3rem] PoppinsBold relative">
            <div className="text-white">
              <div className="absolute start-[12rem] top-[1.2rem] gap-[4rem] flex justify-center items-center">
                <img
                  src="../../public/svg/adobeXD.svg"
                  alt=""
                  className="h-[5rem] w-[4rem]"
                />
                <h2 className="text-[2rem]">Adobe XD</h2>
              </div>
              <div className="absolute start-[13rem] top-[8.2rem] gap-[5rem] flex justify-center items-center">
                <h2 className="text-[2rem]">Figma</h2>
                <img
                  src="../../public/svg/figma.svg"
                  alt=""
                  className="h-[5rem] w-[2.5rem]"
                />
              </div>
              <div className="absolute start-[10rem] top-[15.2rem] gap-[2rem] flex justify-center items-center">
              <img
                  src="../../public/svg/DaVinciResolve.svg"
                  alt=""
                  className="h-[5rem] w-[4.5rem]"
                />
                <h2 className="text-[2rem]">DaVinci Resolve</h2>

              </div>
            </div>
            <div className="skills-bg">
              <div className="relative">
                <div className="absolute left-[12rem] top-[1.2rem] gap-[10px] flex justify-center items-center">
                  <img
                    src="../../public/svg/React.svg"
                    alt=""
                    className="h-[5rem] w-[5rem]"
                  />
                  <h2 className="text-[2rem]">React</h2>
                </div>
                <div className="absolute left-[30rem] top-[1.2rem] gap-[10px] flex justify-center items-center">
                  <img
                    src="../../public/svg/mongoDB.svg"
                    alt=""
                    className="h-[5rem] w-[5rem]"
                  />
                  <h2 className="text-[2rem]">MongoDB</h2>
                </div>
                <div className="absolute left-[3rem] top-[8.2rem] gap-[10px] flex justify-center items-center">
                  <img
                    src="../../public/svg/nodejs3.svg"
                    alt=""
                    className="h-[5rem] w-[5rem]"
                  />
                  <h2 className="text-[2rem]">Node JS</h2>
                </div>
                <div className="absolute left-[22rem] top-[8.2rem] gap-[10px] flex justify-center items-center">
                  <img
                    src="../../public/svg/git.svg"
                    alt=""
                    className="h-[5rem] w-[5rem]"
                  />
                  <h2 className="text-[2rem]">Git-hub</h2>
                </div>
                <div className="absolute left-[40rem] top-[8.2rem] gap-[10px] flex justify-center items-center">
                  <img
                    src="../../public/svg/bootstrap.svg"
                    alt=""
                    className="h-[5rem] w-[5rem]"
                  />
                  <h2 className="text-[2rem]">Bootstrap</h2>
                </div>
                <div className="absolute left-[11rem] top-[15.2rem] gap-[10px] flex justify-center items-center">
                  <img
                    src="../../public/svg/tailwind.svg"
                    alt=""
                    className="h-[5rem] w-[5rem]"
                  />
                  <h2 className="text-[2rem]">Tailwind</h2>
                </div>
                <div className="absolute left-[31rem] top-[15.2rem] gap-[10px] flex justify-center items-center">
                  <img
                    src="../../public/svg/js.svg"
                    alt=""
                    className="h-[5rem] w-[4rem]"
                  />
                  <h2 className="text-[2rem]">Javascript</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
