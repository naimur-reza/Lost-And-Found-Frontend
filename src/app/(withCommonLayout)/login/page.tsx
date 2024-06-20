"use client";

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import RxInputs from "@/components/Forms/RXInput";
import RxForm from "@/components/Forms/RXForm";
import { FieldValues } from "react-hook-form";
import { loginUser } from "@/services/actions/action";
import { useRouter } from "next/navigation";
import { storeUserInfo } from "@/services/auth.services";
import { toast } from "sonner";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        RetrieveX
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Login = () => {
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (data: FieldValues) => {
    const user = await loginUser(data);

    if (user?.success) {
      toast.success("User logged in successfully.");
      storeUserInfo(user?.data?.token);
      router.push("/");
      router.refresh();
    } else {
      setError(user?.message);
    }
  };

  const defaultValues = {
    email: "",
    password: "",
  };

  return (
    <Container maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component={RxForm}
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <RxInputs
            size="small"
            type="email"
            margin="normal"
            required
            fullWidth
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <RxInputs
            size="small"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )}
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                <Typography
                  sx={{
                    fontSize: 14,
                    color: "grey",
                  }}
                >
                  Forgot password?
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2" sx={{ color: "grey" }}>
                Don&#39;t have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Login;
