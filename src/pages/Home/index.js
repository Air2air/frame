import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { instructions } from "./instructions.js";
import "./styles.scss";

const cache = new InMemoryCache();

const assets = new ApolloClient({
  cache: cache,
  uri: "https://community-api.frame.io/v4/catalog/assets",

  name: "react-web-client",
  version: "1.3",
  queryDeduplication: false,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: "cache-and-network",
    },
  },
});

const ASSETS = gql`
  query GetAssets {
    assets 
  }
`;

function Assets() {
  const { loading, error, data } = useQuery(ASSETS);

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.map((asset) => (
    <div
      key={asset.full_name}
      className="d-flex align-items-center justify-content-start item"
    >
      <span className="name d-flex align-items-center ">
        {asset.full_name}:
      </span>
    </div>
  ));
}

const Home = () => {
  return (
    <>
      <ApolloProvider client={assets}>
        <div dangerouslySetInnerHTML={{ __html: instructions }} />
        <Container>
          <Row>
            <Col xs={6}>
              <Assets />
            </Col>
            <Col xs={6}>
              <Assets />
            </Col>
          </Row>
        </Container>
      </ApolloProvider>
    </>
  );
};

export default Home;
