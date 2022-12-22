import React, { Component } from 'react';
import { getAllBar} from '../API/barAPI';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import BarSelectorProduct from "./frame/barInfo/BarSelectorProduct"

class BarList extends Component {
       
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    
    // ComponentDidMount is used to
    // execute the code 
   componentDidMount() {
        
           getAllBar().then((bar) => {
            this.setState({
                items: bar,
                DataisLoaded: true
            });
           })
    }


    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleases wait some time.... </h1> </div> ;
        
        return (
        <div className = "App">
            {
                items.map((item) => ( 
                <ol key = { item.ID_BAR } >
                    Nom_bar: { item.NOMBAR }, 
                    photo_bar: { item.PHOTOBAR }, 
                    ouverture: { item.OUVERTURE },
                    fermeture: {item.FERMETURE},
                    adresse: { item.ADRESSE},
                    type: { item.typebar.NOM_TYPE}
                    <Button>
                    <Link to={'BarInfo/'+item.ID_BAR} > Voir le bar </Link>
                    </Button>
                    </ol>
                ))
            }
           
            
            
        </div>
    );
}
}

export default BarList;
