import classes from '../../pages/LaunchPage.module.css';
import Card from "../launch/Card";

function CardList(props) {

    return (
        <div className={classes.gridContainer}>
          {[props.data.map((card) => {
            return <Card key={card.id} title={card.title}/>
          })]}
          
        </div>
      );
}

export default CardList;