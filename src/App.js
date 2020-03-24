import React from "react";
import { Admin, Resource } from "react-admin";
import dataProvider from "./services/data-provider";
import authProvider from "./services/auth-provider";

function App() {
  return (
    <Admin dataProvider={dataProvider()} authProvider={authProvider}>
      {/* <Resource
      name="products"
      list={ProductList}
      edit={ConcursoCreate}
      create={ConcursoCreate}
      show={ConcursoShow}
    /> */}
    </Admin>
  );
}

export default App;
