const Card = ({img, team, text}) => {

    return (
        <div className="card h-100 card-hover">
            <img src={img} className="card-img-top" alt={team} />
            <div className="card-body">
                <h5 className="card-title">{team}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn gold-btn">View Team →</a>
            </div>
        </div>
    )
}
export default Card; 