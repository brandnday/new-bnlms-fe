import React from 'react'

import { Select as Selectan
} from 'antd';
const Option = Selectan.Option;

const Select = ({options,...props}) => {
    return (
      <Selectan
      {...props}
      >
        {options.map((item, index) => (
          <Option value={item.id} key={index}>
            {item.text}
          </Option>
        ))}
      </Selectan>);
}

export default (Select)