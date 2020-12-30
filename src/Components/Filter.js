import { useState } from 'react';
import Dropdown from 'rc-dropdown';
import Menu, { Item } from 'rc-menu';
import 'rc-dropdown/assets/index.css';

function Filter({
    setSelected,
    items,
    label
}) {

    const [visible, setVisible] = useState(false);

    const menu = (
        <Menu
        style={{ width: 140 }}
        multiple
        onSelect={({ selectedKeys }) => setSelected(selectedKeys)}
        onDeselect={({ selectedKeys }) => setSelected(selectedKeys)}
        >
            {
                items.map(item => (
                    <Item key={item}>{item}</Item>
                ))
            }
        </Menu>
    );

    return (
        <Dropdown
          trigger={['click']}
          onVisibleChange={setVisible}
          visible={visible}
          closeOnSelect={false}
          overlay={menu}
          animation="slide-up"
        >
          <button>Filter {label}</button>
        </Dropdown>
      );
}


export default Filter;