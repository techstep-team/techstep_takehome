import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Layout, Row, Card, List, Avatar} from 'antd'
import { UserOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';
import '../App.css';
import logo_green from '../logo_green.png'
import axios from 'axios'

const { Header, Content, Footer } = Layout;


const SearchPage = () => {
    const [ searchString, setSearchString ] = useState('')
    const [ btnText, setBtnText ] = useState('Search Users')
    const [ errorMessage, setErrorMessage ] = useState('')
    const [ searchResults, setSearchResults ] = useState([])


    const handleSearchString = (e) => {
        setSearchString(e.target.value)
    }

    const handleSearch = async (e) => {
        e.preventDefault()
        setBtnText('Searching...')
        setErrorMessage('')
        if (searchString !== '') {
            try {
                const res = await axios.get(`http://localhost:5000/api/routes/users/search/${searchString}`)
                console.log(res)
                const { result } = res.data
                if (res.status === 200) {
                    setBtnText('Search Users')
                    setErrorMessage(null)
                    setSearchResults(result)
                }
            }
            catch (res) {
                setBtnText('Search Users')
                setErrorMessage('Unable to retrieve user search results, please refresh the page and try again')
            }
        } else {
            setBtnText('Search Users')
            setErrorMessage('Please input name and try search again')
        }
    }

    const renderResults = () => {
        const info = (user) => (
            <>
                {user.email && (<>Email: {user.email} <br /> </>)}
                {user.age && (<>Age: {user.age} <br /> </>)}
                {user.location && (<>Location: {user.location} <br /> </>)}
            </>
        )

        return (
            <List 
                itemLayout='vertical'
                dataSource={searchResults}
                renderItem={user => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar style={{ backgroundColor: '#00ae8c' }} icon={<UserOutlined />} />}
                            title={user.name}
                            description={info(user)}
                        />
                    </List.Item>
                )}
            >
            </List>
        )
    }

    return (
        <>
            <Layout style={{ backgroundColor: 'white' }}>
                <Header style={{ padding: '0 170px 60px 0', background: 'white', }}>
                    <Link to='/'>
                        <img className='techstep-logo' src={logo_green} alt='logo' />
                    </Link>
                </Header>
                <Content style={{ backgroundColor: 'white', paddingBottom: '200px' }}>
                    <Row className='card-container'>
                        <Card style={{ width: '1500px', height: '280px' }}>
                            <Row className='title-container'>
                            <h1 className='title' style={{textAlign: 'center', fontSize: '3rem', fontWeight: '600'}}>
                                User Search Portal
                            </h1>
                            </Row>
                            <Row className='title-button'>
                                <SearchInput 
                                    type='text' 
                                    value={searchString} 
                                    onChange={handleSearchString} 
                                    placeholder='Search for users...'
                                />
                                <SearchButton type='submit' value={btnText} onClick={handleSearch} />
                            </Row>
                            {errorMessage !== '' && (
                                <Row>
                                    <ErrorMessage>{errorMessage}</ErrorMessage>
                                </Row>
                            )}
                        </Card>
                    </Row>
                    <Row className='card-container'>
                        <Card style={{ width: '500px', height: 'auto' }}>
                            <ResultsContainer>
                                <ResultsHeader>Results</ResultsHeader>
                                {renderResults()}
                            </ResultsContainer>
                        </Card>
                    </Row>
                </Content>
            </Layout>
        </>
    )
}

export default SearchPage


// STYLED COMPONENTS
const ResultsHeader = styled.div`
    font-size: 3rem;
    font-weight: 500;
`;

const ResultsContainer = styled.div`
    margin: 0 auto;
    text-align: center;
`;

const ErrorMessage = styled.div`
    margin: 0 auto;
    text-align: center;
`;

const SearchInput = styled.input`
    width: 25rem;
    padding-left: 1rem;
    text-align: left;
    border: 1px solid black;
    border-radius: 4.5px;
    margin: 0;
    font-weight: 300;
    &:focus {
        border: 2px solid black;
        outline: 0;
    }
`;

const SearchButton = styled.input`
    width: 12rem;
    height: 45px;
    background: #00AE8C;
    border-radius: 4.5px;
    border: none;
    text-align: center;
    line-height: 45px;
    font-weight: 600;
    font-size: 1.25rem;
    color: white;
    cursor: pointer;
    margin-left: 1rem;
    outline: none;

    &: hover {
        background: rgba(0, 174, 140, .7);
    }
`;
