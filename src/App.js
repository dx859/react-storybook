import React from 'react';
import Table, { Column } from './components/Table';
import tableData from './tmp/tableData';

function App() {
  return (
    <div className="App">
      <Table data={tableData}>
        <Column title="供应商名称" dataIndex="supplier_name" />
        <Column title="姓名" dataIndex="name" />
        <Column title="手机号" dataIndex="mobile" />
        <Column title="账号" dataIndex="account" />
        <Column title="登陆时间" dataIndex="login_time" />
        <Column title="登陆IP" dataIndex="client_ip" />
      </Table>
    </div>
  );
}

export default App;
