
import './App.css';
import Navbar from './component/Navbar';
import Product from './component/Product';
import { useEffect, useState } from 'react';
import axios from 'axios';





function App() {

  let newjewelcount;
  let menscount;
  let womancount;
  let electronicscount;

  const [jewelcount,setjewelcount] =useState("")



  const [products, setproducts] = useState([]);
  const [inputs, setinputs] = useState("");
  const [searchData, setSearchData] = useState([]);
  // const [categorydata, setcategorydata] = useState([]);


  const [selectvalue, setselectvalue] = useState("all");

  // console.log(setinputs)

  // console.log(products)





  const fetchProducts = async (selectvalue) => {




    //  getall funtion 
    if (selectvalue === "all") {


      const getallproducts = async () => {

        let productdata = await axios.get("https://fakestoreapi.com/products")

        setproducts(productdata.data)
      }
      getallproducts();
    }
    // jewelery function
    else if (selectvalue === "jewelery") {

      const getcategory = async (x) => {

        let jewelerydata = await axios.get("https://fakestoreapi.com/products")


        const filterdata = await jewelerydata.data.filter((items) => {
          return items.category === x
        })


        setproducts(filterdata);

        // console.log(`jewelery length`,filterdata.length)
        // jewelerycategory = filterdata.length;
      }

      getcategory(selectvalue);

    } else if (selectvalue === "men's clothing") {

      const getMansdata = async (x) => {

        let mansdata = await axios.get("https://fakestoreapi.com/products")

        let filterdata = await mansdata.data.filter((items) => {
          return items.category === x
        })


        // console.log(filterdata)
        setproducts(filterdata)



      }

      getMansdata(selectvalue)




      // electronics function
    } else if (selectvalue === "electronics") {

      const getallElectronics = async (x) => {

        let electronicsdata = await axios.get("https://fakestoreapi.com/products")

        let filterdata = electronicsdata.data.filter((items) => {
          return items.category === x

        })


        setproducts(filterdata);

      }

      getallElectronics(selectvalue);

      // woman data function
    } else if (selectvalue === "women's clothing") {
      const getallwomandata = async (x) => {
        let womandata = await axios.get("https://fakestoreapi.com/products")

        let filterdata = womandata.data.filter((items) => {
          return items.category === x
        });

        setproducts(filterdata)

      }
      getallwomandata(selectvalue);
    }

    const getgraphdata = async () => {

      const allproductdata = await axios.get("https://fakestoreapi.com/products")

      const filterjewel = allproductdata.data.filter((items) => {
        return items.category === "jewelery"
      })

        setjewelcount(filterjewel.length)
      // newjewelcount = filterjewel.length
      console.log("this isnew jewel count",jewelcount)
      // console.log('this is jewel', newjewelcount)


      const filtermans = allproductdata.data.filter((items) => {
        return items.category === "men's clothing"

      })

      menscount = filtermans.length
      // console.log("this is mans",menscount)


      const filterwomans = allproductdata.data.filter((items) => {
        return items.category === "women's clothing"
      })

      womancount = filterwomans.length
      // console.log('this is woman',womancount)


      const filterelectronic = allproductdata.data.filter((items) => {
        return items.category === "electronics"
      })

      electronicscount = filterelectronic.length
      // console.log(`this is electronic count`,electronicscount);

    }

    getgraphdata()


  }



  const getsearchdata = () => {

    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      // .then(res=>console.log(res))
      .then(res => setSearchData(res))




  }











  useEffect(() => {
    fetchProducts(selectvalue);
    getsearchdata();
    // getcategorydata("jewelery","mans");

  }, [selectvalue]);



  // console.log("hellow from sahi",searchData);
  // console.log(`this is from new fnction `, jewelerycategory)



  return (
    <>

      <Navbar selectvalue={selectvalue} setselectvalue={setselectvalue} products={products} setproducts={setselectvalue} inputs={inputs} setinputs={setinputs} searchData={searchData} setSearchData={setSearchData} ></Navbar>
      <Product products={products} selectvalue={selectvalue} inputs={inputs} manscount={menscount} 
      womancount={womancount}
      electronicscount={electronicscount}
      newjewelcount={newjewelcount}
      
      
      ></Product>


    </>
  )
}

export default App;
