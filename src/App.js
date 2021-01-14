import React from "react";
import GlobalStyles from './base/GlobalStyles.jsx'
import { CardGrid } from './components/Card.jsx';
import cardData from "./data/Card.data.js";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <CardGrid data={cardData} />
    </React.Fragment>
  );
}

export default App;
