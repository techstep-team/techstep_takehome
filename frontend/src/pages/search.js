import { Input, Layout, Typography, Alert } from 'antd';
import { useState } from 'react';
import logo_green from '../logo_green.png';
import axios from 'axios';
import './search.css';
import UserList from '../components/UserList';
import { Link } from 'react-router-dom';

const { Search } = Input;
const { Header, Content } = Layout;
const { Title, Paragraph } = Typography;

export default function SearchPage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  function handleSearch(e) {
    setLoading(true);
    axios
      .get(`http://localhost:5000/api/routes/search?name=${e.target.value}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
  }

  let debounce;
  function handleInputValueChange(e) {
    e.preventDefault();
    clearTimeout(debounce);
    debounce = setTimeout(() => {
      handleSearch(e);
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
        <Link to='/'>
          <img className='techstep-logo' src={logo_green} alt='logo' />
        </Link>
      </Header>
      <Content className='content-container'>
        <Title style={{ color: '#00ae8c' }}>Find Users</Title>
        <Search
          placeholder='Search...'
          loading={loading}
          onKeyUp={(e) => handleInputValueChange(e)}
          style={{ maxWidth: 200 }}
        />

        {/* Display user data */}
        {data !== null && data.length > 0 && !loading && (
          <UserList data={data} />
        )}

        {/* Display of no users found */}
        {data !== null && data.length < 1 && !loading && (
          <Paragraph>No users match your search</Paragraph>
        )}

        {/* Display if Error */}
        {error && (
          <Alert
            message='Looks like something went wrong! Refresh the page and try again'
            type='error'
          />
        )}
      </Content>
    </Layout>
  );
}
