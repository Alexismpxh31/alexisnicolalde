function MyItem(props) {
    const activity = props.activity;
    return <li className='listitem'>{activity}</li>;
}
function MyComponent(){
    return(
        <div>
            <h1>First nested MyComponent</h1>
            <ol>
                <MyItem activity='John' />
                <MyItem activity='David' />
                <MyItem activity='Marc' />
            </ol>
        </div>
    );
}
export default MyComponent;