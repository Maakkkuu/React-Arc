import ListGroup from "./components/ListGroup";

function App() {

  let items = [
    "Davao City",
    "Cebu City",
    "Manila City",
    "Quezon City",
    "Makati City",
  ];

  const handleSelectItem = (items: string) => {
    console.log(items);
  }

  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>
}

export default App;