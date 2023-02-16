import {
  CardBody,
  CardFooter,
  CardHeader,
  Card as ChakraCard,
  Heading,
} from "@chakra-ui/react";

type Props = {
  children?: React.ReactNode;
  className?: string;
  title: string;
};

const Card = ({ children, title }: Props) => {
  return (
    <ChakraCard variant="elevated">
      <CardHeader>
        <Heading size='md'>{title}</Heading>
      </CardHeader>
      {children}
    </ChakraCard>
  );
};

export { Card };
