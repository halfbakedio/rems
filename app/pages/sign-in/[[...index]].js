import { SignIn } from "@clerk/nextjs";
import { Center, Container } from "@chakra-ui/react";

const SignInPage = () => (
  <Container
    id="sign-in-page"
    minH="100vh"
    minW="100%"
    bgGradient="linear(to-r, blue.500, blue.300, blue.500)"
  >
    <Center h="100vh">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </Center>
  </Container>
);

export default SignInPage;
