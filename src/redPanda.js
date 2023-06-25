import './redPanda.css';
const redPanda = {
    src: 'https://gamersrd.com/wp-content/uploads/2021/12/Las-filtraciones-recientes-de-Genshin-Impact-revela-mas-detalles-sobre-el-mapa-completo-de-Teyvat-GamersRD.jpg',
    alt: 'Red Panda',
    width: '1000px'
  };
  
  function RedPanda(){
      return (
        <div className="text">
          <h1>Las Naciones se dividen de acuerdo con sus elementos</h1>
          <img 
            src={redPanda.src}
            alt={redPanda.alt}
            width={redPanda.width} />
        </div>
      );
  }
  export default RedPanda;