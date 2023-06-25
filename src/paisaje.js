import './paisaje.css';
const paisaje = {
    src: 'https://wallpapercave.com/wp/wp8732334.jpg',
    alt: 'Paisaje',
    width: '1000px'
};

function Paisaje(){
    return(
        <div className="mond">
            <h1>Mondstadt</h1>
            <img
                src={paisaje.src}
                alt={paisaje.alt}
                width={paisaje.width}/>
        </div>
        );
}
export default Paisaje;