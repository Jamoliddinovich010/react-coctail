import React from 'react';

import CoctailM from "../coctails.json";
import { useParams } from 'react-router-dom';
function Coctail() {
    let [loading, setLoading] = React.useState(false);
    let [Coctail, setCoctail] = React.useState([]);
   const {
       id
   } = useParams();
  React.useEffect(() => {
      setLoading(true);
      let [coc] = CoctailM.filter((i) => {
          return (id === i.id);
      })
      setCoctail(coc);
      setLoading(false);
  }, [id]);
    if (loading) {
        return <div>Loading...</div>
    } else {
        return (
            <div className="container">
                <div className="card card-in">
                    <div className="img img-in">
                        <img src={`/${Coctail.src}`} alt={Coctail.name}></img>
                    </div>
                    <div className="name name-in">
                        <p>{Coctail.name}</p>
                    </div>
                    <div className="description desc" >
                        <p>{Coctail.description}</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Coctail;