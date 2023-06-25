import './paisaje.css';
const paisaje = {
    src: 'https://wallpapercave.com/wp/wp8732334.jpg',
    alt: 'Paisaje',
    width: '1000px'
};
const elemento = {
    src: 'https://ih1.redbubble.net/image.1849334933.1558/st,small,507x507-pad,600x600,f8f8f8.jpg',
    alt: 'Elemento',
    width: '500px'
}

function Paisaje(){
    return(
        <div className="mond">
            <header classname='FondoM'>
            <h1>Mondstadt</h1>
                <img className='paisaje'
                src={paisaje.src}
                alt={paisaje.alt}
                width={paisaje.width}/>
            </header>
            <h1>Su elemento es: Anemo</h1>
            <img className='elemento'
                src={elemento.src}
                alt={elemento.alt}
                width={elemento.width}/>
            <h1 className='textoa'> Esta nacion es conocida como la nacion de la libertad</h1>
        </div>
        );
}
export default Paisaje;