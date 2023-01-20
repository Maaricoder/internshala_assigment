import React, { useState, useEffect } from 'react';
import SearchResults from 'react-filter-search';
// import { ResponsiveContainer, LineChart, Line } from "recharts";
// import { pie } from "react-chartjs-2";
import Chart from 'react-apexcharts'

import axios from 'axios';

// import {  RxCross2 } from "react-icons/rx";
import { BsXLg } from "react-icons/bs";




function Product({ products, selectvalue, items, inputs, }) {


  const [malecount, setmalecount] = useState("")
  const [newjewelcount, setnewjewelcount] = useState(0)
  const [womancount, setwomancount] = useState(0);
  const [electronicscount, setelectronicscount] = useState(0)
  const [size, setsize] = useState('hidden')




  const getgraphdata = async () => {




    const allproductdata = await axios.get("https://fakestoreapi.com/products")

    const filterjewel = await allproductdata.data.filter((items) => {
      return items.category === "jewelery"
    })

    setnewjewelcount(await filterjewel.length)

    const filtermans = allproductdata.data.filter((items) => {
      return items.category === "men's clothing"

    })


    setmalecount(await filtermans.length);


    const filterwomans = allproductdata.data.filter((items) => {
      return items.category === "women's clothing"
    })


    setwomancount(filterwomans.length)



    const filterelectronic = allproductdata.data.filter((items) => {
      return items.category === "electronics"
    })

    setelectronicscount(filterelectronic.length)

  }

  useEffect(() => {
    getgraphdata()

  }, []);








  const [isactive, setisactive] = useState("truncate");

  const viewDescription = (event, id) => {
    if (isactive) {
      setisactive("")
    } else {
      setisactive("truncate")
    }
  }



  console.log("state from", womancount)

  console.log(`state form `, malecount)
  console.log("state from ", newjewelcount)

  console.log("state from ", electronicscount)


  return (
    <>
      <div className={`chart  bg-gray-200 fixed md:left-20 lg:left-96  ${size}  `}>
        <button onClick={() => setsize("hidden")} className='p-2 '><BsXLg size={20}></BsXLg></button>
        <Chart type='pie' width={400} height={350} 



          series={[newjewelcount, malecount, womancount, electronicscount]}

          options={{
            labels: ["jewelery", "man's clothig", "woman's clothing", "electronics"]
          }}



        >

        </Chart>



      </div>


      <h1 className='  text-md lg:text-2xl font-md lg:font-semibold text-center mt-2 py-2 underline '>Our Top Product</h1>
      <button onClick={() => setsize("visible")} className='text-lg font-bold bg-blue-500 fixed left-64 top-3/4 p-2 md:fixed   md:left-2/3 md:top-1/2 lg:left-3/4 lg:top-3/4 '>Analysis</button>

      <div className='grid grid-cols-2 md:grid-cols-3 md:gap-x-5 lg:grid-cols-5 gap-5 mx-3 '>

        <SearchResults

          value={inputs}
          data={products}

          renderResults={result => (

            result.map((items) => (

              <div key={items.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-100 dark:border-gray-700">
                <a href="#">
                  <img className=" h-52 w-full object-contain rounded-t-lg mt-2 " src={items.image} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-sm font:semibold md:text-lg md:font-bold tracking-tight text-gray-900 dark:text-gray-700">{items.title}</h5>
                  </a>
                  <p onClick={(e) => viewDescription(e, items.id)} className={` cursor-pointer mb-3  font-normal text-gray-700 dark:text-gray-800 ${isactive}  `}>{items.description}</p>

                </div>
              </div>

            ))

          )}

        />

      </div>


    </>
  )
}

export default Product