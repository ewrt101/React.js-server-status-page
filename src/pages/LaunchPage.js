import Card from "../components/Card.js";

import classes from './LaunchPage.module.css';


const DUMMY_DATA = [
  {
    id: 'c1',
    title: 'Minecraft'
  }
  ,
  {
    id: 'c2',
    title: 'Tf2'
  }
  ,
  {
    id: 'c3',
    title: 'website'
  }
  ,
  {
    id: 'c4',
    title: 'website'
  }
  ,
  {
    id: 'c5',
    title: 'website'
  }
  ,
  {
    id: 'c6',
    title: 'website'
  }
  ,
  {
    id: 'c7',
    title: 'website'
  }
];

function LaunchPage() {
  return (
    <div className={classes.gridContainer}>
      {[DUMMY_DATA.map((card) => {
        return <Card key={card.id} title={card.title}/>
      })]}
      
    </div>
  );
}

export default LaunchPage;
