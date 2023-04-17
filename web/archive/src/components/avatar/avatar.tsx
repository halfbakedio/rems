import { AvatarBadge, Avatar as ChakraAvatar } from "@chakra-ui/react";

type Props = {
  imageUrl?: string,
  name?: string,
  size?: "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | undefined,
  status?: "online" | "offline" | undefined,
};

const statusColor = (status: string | undefined) => {
  if (status) {
    return (
      {
        "online": "green.300",
        "offline": "red.300",
      }[status]
    );
  }

  return "black";
};


const Avatar = ({ imageUrl, name, size, status }: Props) => {
  return (
    <ChakraAvatar name={name} src={imageUrl} size={size || "md"}>
      {status && <AvatarBadge bg={statusColor(status)} boxSize="1.25em" />}
    </ChakraAvatar>
  );
};

export default Avatar;
