import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import CardDeck from 'react-bootstrap/CardDeck';

import navs from './data.json';
import searchEngine from './search.json';




function CardItem(props) {
    //console.log(props.card)

    const card = props.card;
    return (
        <Card border="light" bg="light" style={{ width: '13rem' }}>
            <Card.Header><Card.Link href={card.url}> {card.name} </Card.Link></Card.Header>
            <Card.Body>
                <Card.Text>{card.description}</Card.Text>
            </Card.Body>
        </Card>
    );
}



function NaviTab(props) {
    const navigation = navs;
    console.log(navigation);
    const [key, setKey] = useState('Common');

    return (
        <Container>
            <Tabs
                id="controlled-tab"
                activeKey={key}
                onSelect={(k) => setKey(k)}
            >
                {navigation.map((item, index) => (
                    <Tab eventKey={item.category.toString()} title={item.category.toString()} key={index}>
                        <CardDeck style={{marginTop: `1rem`}}>
                            {item.data.map((item,index2) => (
                                <Col>
                                    <CardItem card={item} key={(index+1)*(index2+1)} />
                                </Col>
                                
                            ))}
                        </CardDeck>
                    </Tab>
                ))}
            </Tabs>
        </Container>
    );

}


class MagicNavi extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "google",
            searchValue: ""
        };
        this.handleOptionChange = this.handleOptionChange.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleOptionChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSearchChange(event) {
        this.setState({ searchValue: event.target.value })
    }

    handleSubmit(event) {
        console.log(this.state)
        const value = this.state.searchValue;
        const search = this.state.value;
        /*
        // change method to use JSON data 
        switch (search) {
            case "google": window.location.href = 'https://www.google.com/search?ie=UTF-8&q=' + value; return;
            case "baidu": window.location.href = 'https://www.baidu.com/s?ie=UTF-8&wd=' + value; return;
            case "bing": window.location.href = 'https://bing.com/search?q=' + value; return;
            case "duckduckgo": window.location.href = 'https://duckduckgo.com/?q=' + value; return;
            case "github": window.location.href = 'https://github.com/search?q=' + value; return;
            case "taobao": window.location.href = 'https://s.taobao.com/search?q=' + value; return;
            case "jd": window.location.href = 'https://search.jd.com/Search?enc=utf-8&keyword=' + value; return;
            case "bilibili": window.location.href = 'https://search.bilibili.com/all?keyword=' + value; return;
            //case "": windos.location.href = '' + value; return;6
            default: return;
        }
        */
        for(var i in searchEngine){
            if(searchEngine[i].search === search){
                let url = searchEngine[i].baseUrl + value;
                console.log(url)
                window.location.href = url;
            }
        }

    }

    render() {
        return (
            <Container fluid>
                <Row className="justify-content-md-center" >
                    <Navbar sticky="top" className="mr-auto" >
                        <Navbar.Brand>Magic</Navbar.Brand>
                    </Navbar>
                </Row>
                <Row className="justify-content-md-center" style={{ margin: "2rem" }}>
                    <Col md={10}>
                        <InputGroup >
                            <InputGroup.Prepend>
                                <Form.Control as="select" value={this.state.value} onChange={this.handleOptionChange}>
                                    {
                                        searchEngine.map((item, index) => (
                                            <option value={item.search} key={index}> {item.search} </option>
                                        ))
                                    }
                                </Form.Control>
                            </InputGroup.Prepend>
                            <Form.Control type="text" value={this.state.searchValue} onChange={this.handleSearchChange}
                                placeholder="Searching everything..." />
                            <InputGroup.Append>
                                <Button variant="outline-secondary" onClick={this.handleSubmit}>GoGoGo</Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
                <NaviTab />
                <Row className="justify-content-md-center " >
                    <Navbar fixed="bottom" className="justify-content-md-center">
                        <Navbar.Brand>Magic ω King</Navbar.Brand>
                    </Navbar>
                </Row>
            </Container>
        );
    }
}

export default MagicNavi;