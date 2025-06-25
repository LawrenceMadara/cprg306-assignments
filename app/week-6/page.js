import ItemList from "./item-list";


export default function Page(){
    return(
        <main className= "bg-green-900 p-5">
            <h1 className ="text-3xl font-bold">Shopping List</h1>
            <ItemList/>
        </main>
    );
}
