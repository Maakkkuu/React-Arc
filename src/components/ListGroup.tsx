import { useState } from "react";

function ListGroup() {
  let items = [
    "Davao City",
    "Cebu City",
    "Manila City",
    "Quezon City",
    "Makati City",
  ];

  let selectedIndex = 0;
  // Hook
  const arr = useState(-1);
  arr[0] // variable (selectedIndex)
  arr[1] // updater function

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {selectedIndex = index;}}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
