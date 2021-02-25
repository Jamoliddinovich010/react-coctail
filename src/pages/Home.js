import React from 'react';
import CoctailsM from "../coctails.json";
import CoctailLists from '../components/CoctailLists';
import Navbar from "../components/navbar";
import Search from "../components/search";
function Home() {
    let [ loading, setLoading ] = React.useState(false);
    let [ CoctailList, setCoctailList ] = React.useState([]);
    let [searching,setSearching] = React.useState('')
    
    React.useEffect(() => {
        setLoading(true);
        let newName = CoctailsM.filter((c) => {
            return c.name.includes(searching);
        });
        setCoctailList(newName);
        setLoading(false);

    }, [searching]);
    
    return (
        <div className="Home">
            
            <Navbar> </Navbar>
            <Search setSearching={setSearching} searching={searching}></Search>
            <CoctailLists loading={loading} CoctailList={CoctailList}></CoctailLists>
        </div>
    )
}
export default Home;