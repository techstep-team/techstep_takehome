import { Input, Layout, Typography, Row } from 'antd';
import logo_green from '../logo_green.png';
import '../App.css';
import { useState } from 'react';

const { Search } = Input;
const { Header, Content } = Layout;
const { Title, Paragraph, Text } = Typography;

export default function SearchPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  let debounce;

  function handleSearch(e) {
    e.preventDefault();
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      setLoading(true);
      console.log(e.target.value);
      setTimeout(() => {
        setLoading(false);
        setData([1, 2, 3]);
      }, 1000);
    }, 500);
  }

  return (
    <Layout style={{ backgroundColor: 'white' }}>
      <Header
        style={{
          padding: '0 170px 60px 0',
          background: 'white',
        }}
      >
        <img className='techstep-logo' src={logo_green} alt='logo' />
      </Header>
      <Content>
        <Title>Find Users</Title>
        <Search
          placeholder='Search...'
          loading={loading}
          onKeyUp={(e) => handleSearch(e)}
          style={{ maxWidth: 200 }}
        />
        {data.length > 0 && <p>yay!</p>}
      </Content>
    </Layout>
  );
}
