import React from 'react';
import Button, {ButtonType, ButtonSize} from './components/Button/Button'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'


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
        <Button>Hello</Button>

        <Menu defaultIndex={0}>
            <MenuItem index={0}>hello</MenuItem>
            <MenuItem index={1}>hello</MenuItem>
            <MenuItem index={2}>hello</MenuItem>
            <MenuItem index={3}>hello</MenuItem>
        </Menu>
      </header>
    </div>
  );
}

export default App;
