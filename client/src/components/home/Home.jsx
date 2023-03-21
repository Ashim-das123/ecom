
import  {React,useEffect } from 'react';
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';
import { MidSlide } from './MidSlide';
import MidSection from './MidSection';

import {Box,styled} from '@mui/material'

import {getProducts} from '../../redux/actions/productActions';
import {  useDispatch,useSelector} from 'react-redux';


const Component = styled(Box)`
  padding:10px 10px;
  background:#F2F2F2;
`
const Home =() =>{
   
   const {products} =  useSelector(state => state.getProducts)
   
  //  console.log(products);

   const dispatch = useDispatch();

  useEffect(()=>{
      
       dispatch(getProducts())

  },[dispatch])




    return(
       <>
       
       <NavBar/>
      <Component>

            <Banner/>
            <MidSlide products={products} title="Top Selection" timer={true}/>
            <MidSection/>
            <Slide products={products} title="Suggested for You" timer={false}/>
            <Slide products={products} title="Discount for you" timer={false}/>
            <Slide products={products} title="Recently Viewed" timer={false}/>
            <Slide products={products} title="Trending Offer's" timer={false}/>
            <Slide products={products} title="Recommended for you" timer={false}/>

      </Component>
       
       
       </>
     

       

    )
}
export default Home;