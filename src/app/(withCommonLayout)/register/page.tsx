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
import { Copyright } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { registerUser } from "@/services/actions/action";
import { toast } from "sonner";

const Register = () => {
  const [error, setError] = React.useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (data: FieldValues) => {
    const user = await registerUser(data);

    if (user.success) {
      toast.success("User registered successfully.");
      router.push("/login");
    } else {
      setError(user.message);
    }
  };

  const defaultValues = {
    name: "",
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
          Sign up
        </Typography>
        <Box
          component={RxForm}
          defaultValues={defaultValues}
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
        >
          <RxInputs
            size="small"
            margin="normal"
            required
            fullWidth
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <RxInputs
            size="small"
            margin="normal"
            required
            fullWidth
            type="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
              <Link href="/login" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
};

export default Register;
