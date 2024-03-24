import phone from './phone.png';

function UsefulPhones() {
    return (
    <div>
<h2 className="header_contact">Полезные телефоны</h2>

<div className='cont_useful_phones'>
<div className='useful_phones'>
 <img src={phone} width="50px" height="50px"  alt="phone number"/>
 <div>
    <p>Аварийно-диспетчерская служба филиала МУП "МЩВ «Водоканал Пушкинского г.о.»</p>
       <p className="text_contacts"><a href="tel:+7-496-532-55-93" className="phone_contacts">+7(496)532-55-93</a> </p> 
 </div> 
</div>

<div className='useful_phones'>
   <img src={phone} width="50px" height="50px"  alt="phone number"/>
   <div>
      <p>Аварийно-диспетчерская служба Пушкинского филиала ООО «Газпром теплоэнерго МО»</p>
       <p className="text_contacts"><a href="tel:+7-496-535-15-26" className="phone_contacts">+7(496)535-15-26</a> </p> 
</div>
   </div>
     

<div className='useful_phones'>
   <img src={phone} width="50px" height="50px"  alt="phone number"/>
   <div>
     <p>Аварийно-диспетчерская служба Северных сетей МОЭсК</p>
       <p className="text_contacts"><a href="tel:+7-496-539-97-00" className="phone_contacts">+7(496)539-97-00</a> </p> 
       <p className="text_contacts"><a href="tel:+7-496-539-97-03" className="phone_contacts">+7(496)539-97-03</a> </p> 
</div>
   </div>
      

<div className='useful_phones'>
   <img src={phone} width="50px" height="50px"  alt="phone number"/>
   <div>
     <p>Центральная аварийно-диспетчерская служба</p>
       <p className="text_contacts"><a href="tel:+7-496-532-59-28" className="phone_contacts">+7(496)532-59-28</a> </p> 
</div>
   </div>
      

<div className='useful_phones'>
   <img src={phone} width="50px" height="50px"  alt="phone number"/>
   <div>
     <p>МЧС</p>
       <p className="text_contacts"><a href="tel:+7-496-537-14-01" className="phone_contacts">+7(496)537-14-01</a> </p> 
       <p className="text_contacts"><a href="tel:+7-496-532-15-54" className="phone_contacts">+7(496)532-15-54</a> </p> 
</div>
   </div>
      

<div className='useful_phones'>
   <img src={phone} width="50px" height="50px"  alt="phone number"/>
   <div>
     <p>Служба газового хозяйства</p>
       <p className="text_contacts"><a href="tel:04" className="phone_contacts">04</a> </p> 
       <p className="text_contacts"><a href="tel:+7-496-531-68-77" className="phone_contacts">+7(496)531-68-77</a> </p> 
</div>
   </div>
      
</div>
    </div>   

    )
}

export default UsefulPhones;