import React from 'react';
import './search.css';
import { Layout, Row, Card, List, Avatar, Input, Typography } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import logo_green from './logo_green.png';
import { search, getInitials } from "./utilis";
import { Link } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const {Paragraph, Title} = Typography;

class Search extends React.Component {
    state = {
        users: null,
        loading: false,
        value: ''
    };
    search = async val => {
        this.setState({ loading: true });
        const res = await search(
            `http://localhost:5000/api/routes/search?name=${val}`
        );
        const users = res;
    
        this.setState({ users, loading: false });
    };
    onChangeHandler = async e => {
        this.search(e.target.value);
        this.setState({ value: e.target.value });
    };
    get renderUsers() {
        // var r = () => Math.random() * 256 >> 0;
        // var color = `rgb(${r()}, ${r()}, ${r()})`;
        if (this.state.users) {
            
            return (
                <List
                    itemLayout='horizontal'
                    dataSource={this.state.users}
                    className = 'list-container'
                    renderItem={(item) => (
                        <List.Item>
                        <List.Item.Meta
                            title={`${item.name} | ${item.is_registered ? "Registered": "Not Registered"}`}
                            avatar={
                            <Avatar style={{ backgroundColor: "black" }} size='large'>
                                {getInitials(item.name)}
                            </Avatar>
                            }
                            description={`${item.location} | ${item.email}`}
                        />
                        </List.Item>
                    )}
                />
            );
        }
        else {
            return (
                <Paragraph type='danger'>There are no users</Paragraph>
            );
        }
    }
    render() {
        return (
            <Layout style={{ backgroundColor: 'white' }}>
                <Header
                    style={{
                    padding: '0 170px 60px 0',
                    background: 'white',
                    }}
                >
                    <Link to ='/'>
                        <img className='techstep-logo' src={logo_green} alt='logo' />
                    </Link>
                </Header>
                <Content className='content-container' style={{ backgroundColor: 'white', paddingBottom: '200px', minHeight: '500px'}}>
                    <Row justify="center">
                        <Title level={2} style={{textAlign: 'center', color: '#00ae8c'}}>
                            Users
                        </Title>
                    </Row>
                    <Row justify="center">
                        <Input
                            value={this.state.value}
                            onChange={e => this.onChangeHandler(e)}
                            placeholder="Search for users"
                            style={{ maxWidth: 300 }}
                        />
                    </Row>
                    <Row justify="center">
                        {this.renderUsers}
                    </Row>
                </Content>
                <Footer style={{ backgroundColor: '#182628', height: '200px' }}>
                    <Card
                    style={{
                        width: '100%',
                        backgroundColor: '#182628',
                        borderColor: '#182628',
                    }}
                    >
                    <center>
                        <img
                        className='techstep-logo'
                        src={logo_green}
                        alt='Techstep Logo'
                        />
                        <br />
                        <br />
                        <span style={{ color: 'grey', paddingLeft: '40px' }}>
                        {' '}
                        © 2020 Techstep Inc.
                        </span>
                        <br />
                        <span style={{ color: 'grey', paddingLeft: '40px' }}>
                        {' '}
                        All Rights Reserved.
                        </span>
                    </center>
                    </Card>
                </Footer>
            </Layout>
        )
    }
}

export default Search;