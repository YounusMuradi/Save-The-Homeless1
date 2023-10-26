import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

function StudentList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  console.log("poooolice", data);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data } = await axios.get(
        "https://64f56a6a2b07270f705d35cc.mockapi.io/users"
      );
      setData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="relative bg-backgorund">
      <Header />
      <section className="">
        <div className="flex relative flex-row items-stretch justify-center  pt-12 pb-2 ">
          <div className="  text-3xl font-bold text-true-gray-800">
            Student List
          </div>
          <br />

          <br />
        </div>
        <div className="flex  justify-center mb-8">
          <p className="font-semibold text-sm ">
            IF YOU HAVE ANY PROBLEM IN SIGNNING PLEASE CONTACT TO OUR <br />
            COMUNITY TEAM THEY WILL SOLVE YOUR PROBLEM SOONLY
          </p>
        </div>

        <div class="relative overflow-x-auto w-full mb-12 bgba shadow-md  sm:rounded-lg px-[60px]">
          <div class="sm:-mx-6 rounded-sm">
            <div class="inline-block min-w-full py-2 rounded-md sm:px-6 lg:px-8">
              <div class="overflow-x-auto rounded-sm ">
                <table class="min-w-full w-full text-left border border-black  rounded-sm text-sm font-light">
                  <thead class="border-b  font-medium dark:border-neutral-500">
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        Image
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Name
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Father Name
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Street Name
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Number
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {loading ? (
                      <p className="text-4xl  my-9 font-bold ml-[450px] ">
                        Loaidng ...
                      </p>
                    ) : (
                      data.map(
                        ({
                          name,
                          image,
                          father_name,
                          phone_num,
                          streat_name,
                        }) => (
                          <tr class="border-b dark:border-neutral-500">
                            <td class="whitespace-nowrap px-6 py-4 font-medium">
                              {image}
                            </td>
                            <td class="whitespace-nowrap px-6 font-bold  py-4">
                              {name}
                            </td>
                            <td class="whitespace-nowrap font-bold  px-6 py-4">
                              {father_name}
                            </td>
                            <td class="whitespace-nowrap font-bold  px-6 py-4">
                              {streat_name}
                            </td>
                            <td class="whitespace-nowrap font-bold  px-6 py-4">
                              {phone_num}
                            </td>
                            <td class="whitespace-nowrap font-bold  px-6 py-4">
                              {}
                            </td>
                          </tr>
                        )
                      )
                    )}

                    {/* <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium"></td>
                      <td class="whitespace-nowrap px-6 py-4">Cell</td>
                      <td class="whitespace-nowrap px-6 py-4">Cell</td>
                      <td class="whitespace-nowrap px-6 py-4">Cell</td>
                      <td class="whitespace-nowrap px-6 py-4">Cell</td>
                      <td class="whitespace-nowrap px-6 py-4">Cell</td>
                    </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* 
        <div class="relative overflow-x-auto w-full mb-12 bgba shadow-md sm:rounded-lg px-[60px]">
          <table class="w-full text-sm text-left  border border-black">
            <thead class="text-xs  uppercase  bg-backgorun">
              <tr className="border border-black ">
                <th scope="col" class="px-6 py-3 border border-r-none ">
                  Image
                </th>
                <th scope="col" class="px-6 py-3 border border-black">
                  Name
                </th>
                <th scope="col" class="px-6 py-3 border border-black">
                  Father Name
                </th>
                <th scope="col" class="px-6 border border-black py-3">
                  Street Name
                </th>
                <th scope="col" class="px-6 border border-black py-3">
                  Phone Number
                </th>
                <th scope="col" class="px-6 border border-black py-3">
                  Edit
                </th>
              </tr>
            </thead>
            <tbody className="">
              {loading ? (
                <p className="text-4xl  font-bold ml-[450px] ">Loaidng ...</p>
              ) : (
                data.map(
                  ({ name, image, father_name, phone_num, streat_name }) => (
                    <tr class=" border-b bg-backgorund border border-black dark:border-gray-700">
                      <td class="px-6 py-4 border border-black">{image}</td>
                      <td class="px-6 py-4 border font-bold border-black">
                        {name}
                      </td>
                      <td class="px-6 py-4 border border-black">
                        {father_name}
                      </td>
                      <td class="px-6 py-4 border border-black">
                        {" "}
                        {streat_name}
                      </td>
                      <td class="px-6 py-4 border border-black">
                        <a
                          href="#"
                          class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                          {phone_num}
                        </a>
                      </td>
                    </tr>
                  )
                )
              )}
              ,
            </tbody>
          </table>
        </div> */}

        {/* <div className=" mt-8 mb-20 mx-20">
          <div className="border  border-black border-b-white w-full h-16">
            <table className="">
              <tr className="flex items-center justify-between">
                <th>Image</th>
                <th>Name</th>
                <th>Father Name</th>
                <th>Street Name</th>
                <th>Phone Number</th>
              </tr>

              {data.map(
                ({ name, image, father_name, phone_num, streat_name }) => (
                  <tr>
                    <td>{image}</td>
                    <td>{name}</td>
                    <td>{father_name}</td>
                    <td>{streat_name}</td>

                    <td>{phone_num}</td>
                  </tr>
                )
              )}
            </table>
          </div>
        </div> */}
      </section>
      <div className=" relative">
        <Footer />
      </div>
      <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script>
    </div>
  );
}

export default StudentList;
