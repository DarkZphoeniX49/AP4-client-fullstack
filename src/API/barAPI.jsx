import axios from "axios";

const URL = "http://localhost:8000"

export async function getAllBar(){
    try{
        const {data} = await axios.get(`${URL}/api/Bar`);
        return data;
    }
    catch(error){
        console.log(error);
    }
}


export async function getBarById(id){
    try{
        const {data} = await axios.get(`${URL}/api/BarInfo/${id}`);
        return data;
    }
    catch(error){
        console.log(error);
    }
}


export async function getAllDrinks(id){
    try{
        const {data} = await axios.get(`${URL}/api/GetBoissons/${id}`);
        return data;
    }
    catch(error){
        console.log(error);
    }
}

export async function getSoftDrinks(id){
    try{
        const {data} = await axios.get(`${URL}/api/GetBoissons/SansAlcool/${id}`);
        return data;
    }
    catch(error){
        console.log(error);
    }
}
export async function getDrinksAlcool(id){
    try{
        const {data} = await axios.get(`${URL}/api/GetBoissons/Alcool/${id}`);
        return data;
    }
    catch(error){
        console.log(error);
    }
}

export async function getFoodList(id){
    try{
        const {data} = await axios.get(`${URL}/api/GetNourriture/${id}`);
        return data;
    }
    catch(error){
        console.log(error);
    }
}