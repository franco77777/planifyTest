import { useState } from "react";
import { bgCategories, textGreyLight } from "../../utils/css";
import "./home.css";

const Home = () => {
  const [toogle, setToogle] = useState<boolean>();
  const mock = [
    {
      id: 1,
      name: "Classic Manicure",
      description:
        "Includes filing, moisturizing, and permanent polish application.",
      category: "Hands and Feet",
    },
    {
      id: 2,
      name: "Spa Pedicure",
      description: "Spa pedicure with paraffin bath for soft and relaxed feet.",
      category: "Hands and Feet",
    },
    {
      id: 3,
      name: "Cut and Style",
      description: "Custom haircut plus washing and styling.",
      category: "Hair",
    },
    {
      id: 4,
      name: "Full Color",
      description: "Full hair coloring with ammonia-free products.",
      category: "Hair",
    },
    {
      id: 5,
      name: "Deep Tissue Massage",
      description: "Intense massage to alleviate muscle tension.",
      category: "Massage and Spa",
    },
    {
      id: 6,
      name: "Anti-Aging Facial",
      description: "Rejuvenating facial treatment with natural products.",
      category: "Facial Care",
    },
    {
      id: 7,
      name: "Waxing",
      description: "Body waxing for smooth, hair-free skin.",
      category: "Hair Removal",
    },
    {
      id: 8,
      name: "Hair Treatment",
      description: "Repairing treatment for damaged or dyed hair.",
      category: "Hair",
    },
    {
      id: 9,
      name: "Professional Makeup",
      description: "Makeup services for special events.",
      category: "Makeup",
    },
    {
      id: 10,
      name: "Facial Cleansing",
      description:
        "Deep cleansing with impurity extraction and mask application.",
      category: "Facial Care",
    },
    // More services can be added as needed
  ];
  const handleToogle = (e: number) => {
    const item = document.getElementById(e + "");
    const hasClase2 = item?.classList.contains("toogle");
    hasClase2
      ? item?.classList.remove("toogle")
      : item?.classList.add("toogle");
    console.log(hasClase2);

    //setToogle(!toogle);
  };
  return (
    <>
      <div
        className={`border-4 border-[${textGreyLight}] mt-[2vw] font-semibold p-[calc(8px+1.5vw)]`}
      >
        <div className="m-[1vw] flex flex-col gap-[calc(5px+0.5vw)] ">
          <span
            className={` text-[${textGreyLight}] text-[calc(8px+2vw)] px-[calc(4px+1vw)] `}
          >
            Categorias
          </span>
          <ul className="flex flex-col gap-[calc(5px+0.5vw)] ">
            {/* <li id="nombre" onClick={handleToogle} className="toogle">
            soy la lista
          </li> */}
            {mock.map((a) => {
              return (
                <li
                  className={`text-[${textGreyLight}] text-[calc(8px+1.5vw)]   `}
                >
                  <div className={`bg-[#f2f5f7] px-[calc(6px+1vw)]`}>
                    <div
                      onClick={() => handleToogle(a.id)}
                      className="flex justify-between items-center cursor-pointer "
                    >
                      <div>{a.name}</div>
                      <button
                        //onClick={() => setShowSideBar()}
                        name={a.id + ""}
                        className={`animation  transition-transform duration-500  relative w-[calc(6px+3vw)] h-[calc(6px+3vw)] bg-red-600  ease-in-out rounded-full border-0
                      } `}
                      >
                        <span className="rounded-md w-full bg-[#3b82f6] absolute h-[calc(2px+0.5vw)] top-[40%] left-0 transition-transform duration-500"></span>
                        <span className="rounded-md w-7 hidden bg-[#3b82f6]  absolute h-1  left-3.5  top-[34px] transition-transform duration-500"></span>
                      </button>
                    </div>
                  </div>

                  <div className={`duration-500  unableToogle `} id={a.id + ""}>
                    <div
                      className={`border-4 border-[${textGreyLight}] mt-[calc(2px+1vw)] px-[calc(2px+1vw)]`}
                    >
                      <div>{a.description}</div>
                      <div className="mr-0 ml-auto w-min">
                        <button
                          type="button"
                          className="py-[calc(2px+0.2vw)] px-[calc(6px+0.2vw)] mb-[calc(1px+1vw)] text-white relative bg-[#788896] hover:bg-gray-600  pointer-events-auto  rounded-sm      "
                        >
                          Seleccionar
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default Home;
