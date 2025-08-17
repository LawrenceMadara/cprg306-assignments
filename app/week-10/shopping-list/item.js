

export default function Item({ iName, iQuantity, iCategory, onSelect }) {
    return(
        <div
            onClick={() => {
                if (typeof onSelect === "function") {
                    onSelect(iName);
                }
            }}
      className="cursor-pointer"
    >
            <li className="font-serif p-3 m-4 bg-red-900 border-4 max-w-50 list-none">
                <p className="text-xl font-bold">{iName}</p>
                <p>Quantity: {iQuantity}</p>
                <p>category: {iCategory}</p>
            </li>
        </div>
    );
}