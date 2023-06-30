import { SignIn } from "@clerk/nextjs";
import { Center, Container } from "@chakra-ui/react";

const SignInPage = () => (
  <Container
    id="sign-in-page"
    minH="100vh"
    minW="100%"
    bgGradient="linear(to-r, gray.300, white, green.200)"
  >
    <Center h="100vh">
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </Center>
  </Container>
);

export default SignInPage;
