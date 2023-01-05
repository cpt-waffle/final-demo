import './index.css';

const Card = props => {

  return (<div>
    <img className="card--img" src={props.url}/>
  </div>)
}

export default Card;