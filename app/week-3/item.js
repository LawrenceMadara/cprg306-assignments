

export default function Item(props){
    return(
        <li className="font-serif p-3 m-4 bg-green-600 border-4 max-w-50 list-none">
            <p className="text-xl font-bold">{props.iName}</p>
            <p>Quantity: {props.iQuantity}</p>
            <p>category: {props.iCategory}</p>
        </li>
    );
}