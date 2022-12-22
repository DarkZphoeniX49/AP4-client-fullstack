import axios from "axios";

const API_URL = "http://localhost:8000/api/";


//toute une liste
export async function getTodo(){
    try{
        const { data } = await axios.get(API_URL +'Bar' );
        return data.todo;
    }
    catch(error){
        console.log(error);
    }

}

//liste de un truc en particulier

const {id} = useParams(); //récupère la valeur URL

export async function getTodoById(id){
    try{
        const { data } = await axios.get(' ${API_URL}Bar/${id} ');
        return data.todo;
    }
    catch(error){
        console.log(error);
    }

}
 //on l'utilise comme ça : 

 getTodoById(id);


//exemple de récuperation de la data dans un autre composant 
//import getTodo 
 const [todos, setTodo] = useState({});


 useEffect(() => {

    async function todoLoad()
    {
        const todos=await getTodo();
        setTodo(todos)
    };
    todoLoad();
}, []);

//lors de la répartion de donnée : 

todos.map((todo) => (
    <CardTodo title={todo.title} id={todo.id}/>
) )

//LIENS AVEC UNE DONNEE DE UN TRUC EN PARTICULIER

<Link to={'todo/${id}'} >
</Link>

// pour une route utilisant les ID :

<Route path='todo/{id}' element={<ToDoSingle/>}/>




//PARTIE FORMULAIRE , envoie de données
//PENSER A UTILISER LES PROPRIETE REACT HOOK FORM POUR SECURISER

export async function createTodo(tododata){
    try{
        const {data} = await axios.post('${API_URL}todos',(tododata));
        return data;
    } catch(error){console.log(error);}
}


const handleSubmit = useForm();

async function onSubmit(data) {
    const todo = await createTodo(data);

}


<form onSubmit={handleSubmit(onSubmit())}>
    <input type='text' name='title'/>

</form>