import React from "react";
import { Routes, Route } from "react-router-dom";
import { ContainerApp } from "./components/ContainerApp";
// import { Link as RouterLink } from "react-router-dom";
// import r2wc from "@r2wc/react-to-web-component";

const CounterAppOne = React.lazy(() => import("app1/CounterAppOne"));
const CounterAppTwo = React.lazy(() => import("app2/CounterAppTwo"));

// const WebGreeting = r2wc(CounterAppOne);

// customElements.define("web-greeting", WebGreeting);
const App = () => (
  <>
  {/* <web-greeting name="Sven" description="How do you do?"></web-greeting> */}
    <Routes>
      <Route
        path="/"
        element={
          <ContainerApp
            CounterAppOne={CounterAppOne}
            CounterAppTwo={CounterAppTwo}
          />
        }
      />
      <Route path="app1/*" element={<CounterAppOne />} />
      <Route path="app2/*" element={<CounterAppTwo />} />
    </Routes>
  </>
);

export default App;
