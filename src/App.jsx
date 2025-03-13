import React from "react";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-stone-900 grid py-4 min-h-screen">
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;
