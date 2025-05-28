import ItemList from "./item-list";


export default function Page(){
    return(
        <main className= "pl-150 bg-green-800">
            <h1 className ="text-3xl font-bold m-2">Shopping List</h1>
            <ItemList/>
        </main>
    );
}
