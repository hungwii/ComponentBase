import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/Button'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>hello</Button>
        <Button btnType={ButtonType.Primary} btnSize={ButtonSize.Small}>primary samll</Button>
        <Button btnType={ButtonType.Primary} btnSize={ButtonSize.Large} disabled={true}>primary large</Button>
        <Button btnType={ButtonType.Danger}>danger</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com'>baidu</Button>
        <Button btnType={ButtonType.Link} href='http://www.baidu.com' disabled={true}>baidua</Button>
      </header>
    </div>
  );
}

export default App;
