import Card from "../components/launch/Card.js";

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
    title: 'website2'
  }
  ,
  {
    id: 'c5',
    title: 'FTP'
  }
  ,
  {
    id: 'c6',
    title: 'voip'
  }
  ,
  {
    id: 'c7',
    title: 'reboot'
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
