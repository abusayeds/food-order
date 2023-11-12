

const Carusel = () => {
   const slider = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwfD3ag82DwXzI2YJfQ0sozlnisautnWpCXb7wnhrH2ct9VIMuHbxUPVUN55QRVplGu70&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qiFboMey4r13L_aCj0TXaDp_-9rbtGbdRmxXpRVbG3_LqPkipblzTB0-liNHqrxqFao&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qiFboMey4r13L_aCj0TXaDp_-9rbtGbdRmxXpRVbG3_LqPkipblzTB0-liNHqrxqFao&usqp=CAU"
   ]

  return (
 
     <div className="overflow-hidden relative ">
      <div className=" flex ">
     {
      slider.map( slid  => 
     
        <img src={slid} alt=""  />
   )
     }
    </div>
     </div>

  );
};

export default Carusel;