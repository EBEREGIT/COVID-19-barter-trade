import Layout from "../components/Layout";
import { Card, Container } from "react-bootstrap/";
// import CreatePost from "../components/CreatePost";
let items = [];

for (let index = 0; index < 10; index++) {
  items.push(
    <Card style={{ width: "100%" }}>
      <Card.Body>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Want</th>
                <th scope="col">Give</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Something</td>
                <td>Another thing</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Card.Link href="#">08031904145</Card.Link>
        <Card.Link href="#">Njoku Samson Ebere</Card.Link>
        <Card.Link href="#">Enugu</Card.Link>
        <Card.Link href="#">3h ago</Card.Link>
      </Card.Body>
    </Card>
  );
}

function HomePage() {
  return (
    <Layout>
      <Container>
        {/* <CreatePost /> */}
        {items}
      </Container>
    </Layout>
  );
}

export default HomePage;
