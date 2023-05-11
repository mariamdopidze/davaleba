import React from 'react';
import './App.css';
import Style from './Components/Notification';




function App() {
  return (
    
    <div className='APP'>
      <div className="container">
<div className='box'>
<Style
  title= "Success"
  text = "Order Placed Successfully. You can check order delivery status."/>

</div>

<div className='box'>
<Style
  title= "Error"
  text = "Order Placed Successfully. You can check order delivery status."/>
</div>


<div className='box'>
<Style
  title= "Warning"
  text = "Order Placed Successfully. You can check order delivery status"/>

</div>

<div className='box'>
<Style
  title= "Info"
  text = "Order Placed Successfully. You can check order delivery status"/>

</div>

        
</div>

</div>
    
  );
}

export default App;
