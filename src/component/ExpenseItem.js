
 import './style.css';

// function ExpenseItem(){

//     return (
        
//         <div classNmae="expense__item">
// <div>Jan 2nd 2023</div>
//         <div className="expense__description">
//         <h2>Car Insurance</h2>
//         <div className="expence__price">$2300</div>
//         <div className="expense__location">New York</div>
//         </div>
// </div>
//     );
// }

// export default ExpenseItem;

// expense file

// import './style.css';

// function ExpenseItem(location){

//     return (
//         <div className="expense__item">
//             <div>Jan 2nd 2023</div>
//             <div className="expense__description">
//                 <h2>Car Insurance</h2>
//                 <div className="expence__price">Expense $ {2300}</div>
//                 <div className="expense__location">Location New York</div>
//             </div>
//         </div>
//     );
// }

// export default ExpenseItem;
import React from 'react';

function ExpenseList(props){
    const expenses = [
        {id: 1, description: 'Car Insurance', price: 2300, location: 'New York'},
        {id: 2, description: 'Rent', price: 1000, location: 'San Francisco'},
        {id: 3, description: 'Groceries', price: 200, location: 'New York'},
        
    ];

    return (
        <div>
            {expenses.map(props => (
                <ExpenseList 
                    key={props.id}
                    description={props.description}
                    price={props.price}
                    location={props.location}
                />
            ))}
        </div>
    );
}

export default ExpenseList;
