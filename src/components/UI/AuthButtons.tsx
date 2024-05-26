import { getUserInfo } from "@/services/auth.services";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AuthButtons = () => {
  const user = getUserInfo();

  const router = useRouter();

  console.log(user);

  return (
    <>
      {!user ? (
        <Box
          sx={{
            display: "flex",
            gap: ".5rem",
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Link href="/register" passHref>
            <Button color="secondary" variant="contained">
              Sign up
            </Button>
          </Link>
          <Link href="/login" passHref>
            <Button color="success" variant="contained">
              Login
            </Button>
          </Link>
        </Box>
      ) : (
        <Button color="success" variant="contained">
          Profile
        </Button>
      )}
    </>
  );
};

export default AuthButtons;
