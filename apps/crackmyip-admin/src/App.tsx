import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { IpDetailsList } from "./ipDetails/IpDetailsList";
import { IpDetailsCreate } from "./ipDetails/IpDetailsCreate";
import { IpDetailsEdit } from "./ipDetails/IpDetailsEdit";
import { IpDetailsShow } from "./ipDetails/IpDetailsShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"crackmyip"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="IpDetails"
          list={IpDetailsList}
          edit={IpDetailsEdit}
          create={IpDetailsCreate}
          show={IpDetailsShow}
        />
      </Admin>
    </div>
  );
};

export default App;
