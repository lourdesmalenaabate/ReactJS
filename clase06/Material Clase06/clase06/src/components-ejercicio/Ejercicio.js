import React from "react";
import { DataProvider } from "../context-ejercicio/DataContext";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const CrudApp = () => {
  return (
    <div className="p-4">
      <h2>CRUD App con Context</h2>
      <article className="mt-4">
        <DataProvider>
          <CrudForm />
          <CrudTable />
        </DataProvider>
      </article>
    </div>
  );
};

export default CrudApp;
