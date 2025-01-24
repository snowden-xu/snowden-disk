import { Button, Space, Table } from 'antd';
import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  return (
    <div>
      黄老哥牛逼
      <Table dataSource={dataSource} columns={columns} />
      <p>{count}</p>
      <Space>
        <Button onClick={() => setCount((pre) => pre + 1)}>+</Button>
        <Button type="primary" onClick={() => setCount((pre) => pre - 1)}>
          -
        </Button>
      </Space>
    </div>
  );
};

export default App;
