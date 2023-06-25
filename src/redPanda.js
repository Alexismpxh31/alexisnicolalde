import './redPanda.css';
const redPanda = {
    src: 'https://akibamarket.com/wp-content/uploads/2021/06/Camiseta-Genshin-Impact-Elementos-Sucio.jpg',
    alt: 'Red Panda',
    width: '500px'
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