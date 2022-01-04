import styled from "styled-components"

const Title = styled.h1`
  color: ${(props) => props.theme.fontColor};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
`;

const Container = styled.div``;

const Login = () => <Container>
  <Title>LogIn Page</Title>
</Container>

export default Login