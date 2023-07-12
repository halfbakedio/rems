import { useSession } from "@clerk/nextjs";
import { Avatar, Flex, Spacer, Text } from "@chakra-ui/react";
import { nanoid } from "nanoid";
import useSWR from "swr";

const UserCard = ({ user }) => {
  const full_name = `${user.first_name} ${user.last_name}`;

  return (
    <Flex minWidth="max-content" alignItems="center" gap="2" border="1px">
      <Avatar size="sm" name={full_name} src={user.profile_image_url} />
      <Text>{full_name}</Text>
      <Spacer />
      {/* <Text>Edit</Text> */}
    </Flex>
  );
};

const UserList = () => {
  const { session } = useSession();

  const fetcher = async () => {
    const token = await session.getToken();

    const res = await fetch("/api/admin/users", {
      headers: {
        "Content-Type": "application/json",
        Cookie: `__session=${token}`,
      },
    });

    const data = await res.json();

    return data;
  };

  const { data: users, error } = useSWR("fetcher", fetcher);

  return (
    <>
      <Flex direction="column" p="2" gap="4">
        {users?.length > 0 && users.map((user) => (
          <UserCard key={nanoid()} user={user} />
        ))}
      </Flex>
    </>
  );
};

export default UserList;
