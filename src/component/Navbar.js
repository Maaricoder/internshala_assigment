import React from 'react'

// import FilterResults from 'react-filter-search';
import SearchResults from 'react-filter-search'
import Product from './Product'

function Navbar({ selectvalue, setselectvalue, inputs, setinputs, products, setproducts, searchData, setSearchData }) {




  // console.log(inputs)
  return (
    <>



      <nav  className='relative p-5 bg-gray-500 lg:flex lg:justify-between'>

        <div className='project name '>
          <h3 className='name  text-lg  text-white font-semibold md:text-xl lg:text-2xl'>Catalogue Management App   </h3>
        </div>

        <div className='fitter and search flex justify-around my-3 lg:justify-end'>
          <div className='selects '>

            <select value={selectvalue} onChange={(e) => setselectvalue(e.target.value)} className=' cursor-pointer p-2 w-40 mx-3'>

              <option value="all" >all</option>
              <option value="jewelery" className='w-40 text-sm'>Jewelery</option>
              <option value="men's clothing" className='w-40 text-sm'>Man's clothing</option>
              <option value="women's clothing" className='w-40 text-sm'>Woman's clothing</option>
              <option value="electronics" className='w-40 text-sm'>Electronics</option>

            </select>

          </div>
          <div className='search '>
            <input value={inputs} onChange={(e) => setinputs(e.target.value)} className=' cursor-pointer py-2 pl-[14px] w-24 md:w-40' type="search" placeholder='Search pro' />
            {/* <SearchResults
              value={inputs}
              data={searchData}
              renderResults={result => (
                <div className='grid grid-cols-2 md:grid-cols-3 md:gap-x-5 lg:grid-cols-5 gap-5 mx-3 '>

                  {
                    result.map((items, index) => (


                      <div key={items.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-100 dark:border-gray-700">
                        <a href="#">
                          <img className=" h-52 w-full object-contain rounded-t-lg mt-2 " src={items.image} alt="" />
                        </a>
                        <div className="p-5">
                          <a href="#">
                            <h5 className="mb-2 text-sm font:semibold md:text-lg md:font-bold tracking-tight text-gray-900 dark:text-gray-700">{items.title}</h5>
                          </a>
                          {/* <p onClick={(e) => viewDescription(e, items.id)} className={` cursor-pointer mb-3  font-normal text-gray-700 dark:text-gray-800 ${isactive}  `}>{items.description}</p> */}

                        {/* </div>
                      </div>


                    ))
                  }


                </div>
              )}

            />




            // </SearchResults> */} 
          </div>

        </div>
      </nav>

    </>
  )
}

export default Navbar