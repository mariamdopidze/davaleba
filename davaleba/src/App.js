import React from 'react';
import './App.css';
import Style from './Components/Notification';
import Green from './Image/first.png';
import Yellow from './Image/second.png';
import Blue from './Image/third.png';
import Red from './Image/four.png';
import Vector from './Image/Vector.png'
import Vectores from './Image/Vector (1).png';
import Vectoryy from './Image/Vector (2).png';
import Vectoryyy from './Image/Vector (3).png';






function App() {
  return (
   
    <div className='APP'>
      <div className="container">
<div className='box'>
<Style
  
  title= "Success"
  text = "Order Placed Successfully. You can check order delivery status."
  green={Green} icon={Vector} />

</div>

<div className='box'>
<Style
  title= "Error"
  text = "Order Placed Successfully. You can check order delivery status."
  yellow={Yellow} icon2={Vectores}/>
</div>


<div className='box'>
<Style
  title= "Warning"
  text = "Order Placed Successfully. You can check order delivery status"
  blue={Blue} icon3={Vectoryy}/>

</div>

<div className='box'>
<Style
  title= "Info"
  text = "Order Placed Successfully. You can check order delivery status"
  red={Red} icon4={Vectoryyy}/>

</div>

        
</div>

</div>
    
  );
}

export default App;