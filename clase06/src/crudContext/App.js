import React, { useState } from "react";
import CrudForm from "./components/CrudForm";
import CrudTable from "./components/CrudTable";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="p-4">
      <h2>CRUD App</h2>
      <article className="mt-4">
        <DataProvider>
          <CrudForm />
          <CrudTable />
        </DataProvider>
      </article>
    </div>
  );
}

export default App;
