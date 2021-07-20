import CardList from "../components/layout/CardList.js";

import { useState, useEffect } from "react";

function LaunchPage() {

  const [isLoading, setIsLoading] = useState(true);
  const [loadedCards, setLoadedCards] = useState([]);


  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:3001/command')
    .then(responce => {
      return responce.json();
    }).then(data => {
      setIsLoading(false);
      setLoadedCards(data);
    });
  }, [setIsLoading, setLoadedCards]);

  

  if (isLoading){
    return <p>Loading.....</p>
  }else{
    return (
      <CardList data={loadedCards}></CardList>
     );
  }
}

export default LaunchPage;
