import { StyledLayoutBody, StyledMainLayout } from "./style";

interface MainLayoutProps {}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <StyledMainLayout>
      <StyledLayoutBody>{children}</StyledLayoutBody>
    </StyledMainLayout>
  );
};
