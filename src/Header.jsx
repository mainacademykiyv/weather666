import React from 'react';
import { Menu } from 'semantic-ui-react';


const Header = ({ getWeatherByCityName }) => {
  return (
    <Menu
      style={{
        fontSize: 32
      }}
      widths={3}
      inverted>
      <Menu.Item
        name='editorials'
        onClick={() => getWeatherByCityName('Kiev')}
      >
        Kiev
        </Menu.Item>

      <Menu.Item
        name='reviews'
        onClick={() => getWeatherByCityName('LasVegas')}
      >
        Las Vegas
        </Menu.Item>

      <Menu.Item
        name='upcomingEvents'
        onClick={() => getWeatherByCityName('Sydney')}
      >
        Sydney
        </Menu.Item>
    </Menu>
  )
};


export default Header;