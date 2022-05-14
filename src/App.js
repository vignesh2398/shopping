
import './App.css';

import Productlist from './Component/ProductList/Productlist';

const products=[
  {title:'Apple',
  desc:'MacBook',
  img:'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1606585981/Croma%20Assets/Computers%20Peripherals/Desktops/Images/9009476763678.png/mxw_2560,f_auto'
},
{
title:'Windows',
desc:'Microsoft',
img:'https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1637407672/Croma%20Assets/Computers%20Peripherals/Laptop/Images/244228_xyw51n.png/mxw_2560,f_auto'
},
{
title:'Linux',
desc:'OSS',
img:'https://149366088.v2.pressablecdn.com/wp-content/uploads/2020/01/distro-board.jpg'

},
{
title:'Android',
desc:'Mobile',
img:'https://www.reliancedigital.in/medias/Redmi-9A-Mobilephones-491901049-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxNzE3Mjl8aW1hZ2UvanBlZ3xpbWFnZXMvaGU4L2gwMi85NDA4MDQ5ODQwMTU4LmpwZ3xmNTg4MjlkMjBlMmFiMDc3MTEzZjQwMmRiOGM2Mzg0NmY1YzNhZDIxYTI2NWRlZTEwZjgwMWQxMzQ1MjZjNjEz'
}
]

function App() {  
  return (
    <div className="App">

      
        
      <Productlist title='New Deals' data={products} sub="hello this is sub"/>
      <Productlist title='Mobile'data={products}/>
      <Productlist title='Laptop' data={products}/>
      <Productlist title='Laptop1' />

      
    </div>
  );
}

export default App;
