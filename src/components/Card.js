function Card(props) {
    return (
        <div className='card'>
            <h2>{props.title}</h2>
            <div className='actions'>
                <button className='btn'>Boop</button>
            </div>
        </div>
    );
}

export default Card;