import { Heading, Switch, Text } from "..";
import { useUsers } from "../../context/users";

interface AppHeaderProps {}

export const AppHeader: React.FC<AppHeaderProps> = () => {
  const { toggleUsers } = useUsers();
  return (
    <header>
      <Heading>Chat Application</Heading>
      <Text>Switch user</Text>
      <Switch onChange={toggleUsers} />
    </header>
  );
};
