import React from "react";
import GlobalStyles from './base/GlobalStyles.jsx'
// import Grid from './components/Grid.jsx';
import Card, { CardGrid } from './components/Card.jsx';
import Image from './components/Image.jsx';

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <CardGrid>
        <Card
          id="Card_1"
          media="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
          title="This is a Title"
          subtitle="This is a Subtitle"
          onClick={() => { }}
        />
        <Card
          id="Card_2"
          media="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
          title="This is a Title"
          subtitle="This is a Subtitle"
          onClick={() => { }}
        >
          {/* <Image src="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk" /> */}
        </Card>
        <Card
          id="Card_3"
          media="https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM"
          title="This is a Title"
          subtitle="This is a Subtitle"
          onClick={() => { }}
        />
        <Card
          id="Card_4"
          media="https://i.picsum.photos/id/1040/4496/3000.jpg?hmac=kvZONlBpTcZ16PuE_g2RWxlicQ5JKVq2lqqZndfafBY"
          title="This is a Title"
          subtitle="This is a Subtitle"
          onClick={() => { }}
        />
      </CardGrid>
    </React.Fragment>
  );
}

export default App;
