import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Switch,
} from "native-base";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import { Route } from "react-router";
import { Link } from "react-router-native";
import { TouchableOpacity } from "react-native";
export default class AnatomyExample extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <Route path="/search" component={Search} />
          <Route exact path="/" component={Home} />
        </Content>
        <Footer>
          <FooterTab>
            <Link to={"/"} component={Button}>
              <Icon name="home" />
            </Link>

            <Link to="/search" component={Button}>
              <Icon name="search" />
            </Link>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
