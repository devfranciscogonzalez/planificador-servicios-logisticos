import { Stack, Typography } from "@mui/material";
import PaperContainer from "../../components/common/Container/PaperContainer";
import AuthenticatedLayout from "../../components/layout/AuthenticatedLayout";
import useAuth from "../../features/auth/hooks/useAuth";
import UserAvatar from "../../features/user/components/UserAvatar/UserAvatar";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <AuthenticatedLayout>
      <PaperContainer>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <UserAvatar
            name={user?.name}
            roleId={user?.role_id}
            sx={{ width: "4rem", height: "4rem", fontSize: "2.5rem" }}
          />
          <Typography variant="h6" component="h1">
            {user?.name}
          </Typography>
          <Typography variant="body1" component="p">
            {user?.email}
          </Typography>
          <Typography variant="body1" component="p">
            {user?.role}
          </Typography>
        </Stack>
      </PaperContainer>
    </AuthenticatedLayout>
  );
};

export default UserProfile;
