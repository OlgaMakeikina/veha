function Map() {

    return (
         <div className='map'  style={{ overflow: 'hidden', maxWidth: '100%', width: '100%', height: '300px' }}>
    <div id="gmap-canvas" style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
      <iframe title="Google Map" style={{ height: '100%', width: '100%', border: '0' }} frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=ул.+Ленина,+д.+4,+п.+Софрино,+Пушкинский+р-он.,+Московская+обл.,+141270&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
      </iframe>
    </div>
  </div>    
    )
}

export default Map;