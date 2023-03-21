import { useEffect } from "react";

import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router-dom";  //if we want to fetch data from url,useParams is an object
import {getProductDetails} from '../../redux/actions/productActions';
import {Box,Grid,styled} from '@mui/material';

import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const Component = styled(Box)`
  
   background:#F2F2F2;
   margin-top:55px


`
const Container = styled(Grid)(({theme})=>({
  background:'#FFFFFF',
  display :'flex',

  [theme.breakpoints.down('md')]:{
    margin:0
  }
  
}))
 
 


const RightContainer = styled(Grid)`
  
  margin-top:50px;

`




const DetailView = () =>{
    const dispatch = useDispatch();
    const {id} = useParams();
    // redux theke value anar jonno useSelector .
      const {loading,product} =useSelector(state =>state.getProductDetails);

      


    useEffect(()=>{
         if(product && id !== product.id)
        dispatch(getProductDetails(id));

    },[dispatch,id,product,loading])

     console.log(product);
    return(

     <Component>
    
      {
        product && Object.keys(product).length && 
          <Container container>
            
            <Grid item lg={4} md={4} sm={8} xs={12}>
                <ActionItem product={product}/>
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
                {/* <Typography>{product.title.longTitle}</Typography>
                <Typography style={{marginTop:5,color:'#878787',fontSize:14}}>
                    8 Ratings & 1 Reviews
                    <Box component="span"> <img src={fassured} alt="img"  style={{width:77,marginLeft:20}}/> </Box>
                    </Typography>
                    <Typography>
                        <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                        <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                        <Box component="span" style={{color:'#388E3C'}}>{product.price.discount}</Box>
                    </Typography> */}
                    <ProductDetail product={product}/>
            </RightContainer>

          </Container>

      }

     </Component>

    )
}

export default DetailView;