import React from 'react';
import Button from './components/Button/Button'
import Menu from './components/Menu/Menu'
import MenuItem from './components/Menu/MenuItem'
import SubMenu from './components/Menu/SubMenu'
import Icon from './components/Icon/Icon'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button>hello</Button>
        <Button btnType='primary' btnSize='small'>primary samll</Button>
        <Button btnType='primary' btnSize='large' disabled={true}>primary large</Button>
        <Button btnType='danger'>danger</Button>
        <Button btnType='link' href='http://www.baidu.com'>baidu</Button>
        <Button btnType='link' href='http://www.baidu.com' disabled={true}>baidua</Button>
        <Button>Hello</Button>


        <Menu mode='vertical' onSelect={(index) => {alert(index)}} defaultOpenSubMenu={['2']}>
          <MenuItem>hello</MenuItem>
          <MenuItem disabled>hello2(disable)</MenuItem>
          <SubMenu title='sub'>
            <MenuItem>in hello</MenuItem>
            <MenuItem>in hello</MenuItem>
            <MenuItem>in hello</MenuItem>
          </SubMenu>
        </Menu>


        <Icon icon='coffee' theme='primary' size='10x'></Icon>
      </header>
    </div>
  );
}

export default App;
