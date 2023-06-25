import './DesMond.css';
const venti = {
    src: 'https://top-mmo.fr/wp-content/uploads/2022/09/Venti-banner-worth-it-Genshin-Impact.jpg',
    alt: 'Venti',
    width: '1000px'
}
function MyItem(props) {
    const activity = props.activity;
    return <li className='listitem'>{activity}</li>;
}
function DesMond(){
    return(
        <div className="encabezadoM">
            <h1>Descripción de Mondstadt:</h1>
            <h1 className='desM'>
                <MyItem activity='Mondstadt la ciudad de la libertad' />
                <MyItem activity='Este es nuesto pundo de inicio de toda nuestra aventura'/>
                <MyItem activity='Aqui podremos conocer a diversas personas que nos van a acompañar en nuestra aventura'/>
                <MyItem activity='Mondstadt tiene un gobierno libre ya que su arconte nunca se hace presente en su ciudad' />
                <MyItem activity='El arconte que se supone deberia gobernar Mondstadt se llama:' />
                <MyItem activity='Barbatos el arconte anemo' />
                <MyItem activity='O tambien conocido como Venti' />
            <img className='venti'
                src={venti.src}
                alt={venti.alt}
                width={venti.width}/>
                <MyItem activity='Barbatos vive en la ciudad de Mondstadt bajo el nombre de Venti' />
                <MyItem activity='Realmente esa no es su forma ya que Barbatos es un espiritu sin forma' />
                <MyItem activity='Pero despues de conocer a un joven bardo en la revolucion contra la antigua monarquia de Mondstadt' />
                <MyItem activity='Al final de la batalla este joven bardo perdio la vida' />
                <MyItem activity='A lo que Barbatos asumio su forma en honor a este joven bardo' />
            </h1>
        </div>
    );
}
export default DesMond;