import './Mycomponent.css';
function MyItem(props) {
    const activity = props.activity;
    return <li className='listitem'>{activity}</li>;
}
function MyComponent(){
    return(
        <div className="lista">
            <h1>Primero: ¿Qué es Teyvat?</h1>
            <ul className='lis'>
                <MyItem activity='Teyvat en un continente en el cual el viajero o viajera emprende su viaje en busca de su hermana o hermano perdido.' />
                <MyItem activity='------------------------------------------------------------------------------------------------------------------' />
                <MyItem activity='Teyvat se rige por sus propias reglas asi que debes tener cuidado no vaya a ser algun accidente.' />
                <MyItem activity='------------------------------------------------------------------------------------------------------------------'/>
                <MyItem activity='En este maravilloso mundo podras encontrar diferentes tipos de criaturas y sobre todo diferentes naciones'/>
                <MyItem activity='------------------------------------------------------------------------------------------------------------------'/>
                <MyItem activity='Cada nacion es gobernada por su propio arconte'/>
            </ul>
        </div>
    );
}
export default MyComponent;