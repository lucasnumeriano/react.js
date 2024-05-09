export default function List() {
    const products = [
        { title: 'repolho', id: 1 },
        { title: 'cebola', id: 2 },
        { title: 'tomate', id: 3 },
    ];
    const listItems = products.map(products => 
        <li key={products.id}>
            {products.title}
        </li>
    );
    return (    
        <>
            <ul>{listItems}</ul>
        </>
    );
}