import React from "react";
import { Button, TextField, Grid, Paper, Typography } from "@material-ui/core";
import { withStyles, WithStyles, createStyles } from "@material-ui/core/styles";
import userForm from "../customHooks/userForm";
const styles = createStyles({
  topHeader: {
    color: "white",
    fontWeight: 900,
  },
  header: {
    margin: "5% 0",
  },
  loginForm: {
    minHeight: "100vh",
  },
  loginBackground: {
    minHeight: "25vh",
    padding: "50px",
    width: "20vw",
    backgroundColor: "#fbfbfb",
  },
  textField: {
    backgroundColor: "#fffff0",
  },
  buttonBlock: {
    width: "100%",
    marginBottom: "20px",
  },
});
const LogInComponent: React.FunctionComponent<WithStyles<typeof styles>> = (
  props
) => {
  const { classes } = props;
  const { handleChange, handleSubmit, userInformation} = userForm();

  return (
    <Grid
      container
      justify="center"
      direction="row"
      style={{ textAlign: "center" }}
    >
      <Grid item>
        <Grid
          container
          direction="column"
          justify="center"
          spacing={2}
          className={classes.loginForm}
        >
          <Paper
            variant="elevation"
            elevation={2}
            className={classes.loginBackground}
          >
            <Grid item>
              <Typography
                component="h1"
                variant="h5"
                className={classes.topHeader}
              >
                MedicKabisha
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                component="h1"
                variant="h5"
                className={classes.header}
              >
                Login to Your Account
              </Typography>
            </Grid>
            <Grid item>
              <form onSubmit={handleSubmit}>
                <Grid container direction="column" spacing={2}>
                  <Grid item>
                    <TextField
                      placeholder="Name"
                      fullWidth
                      name="userName"
                      value={userInformation.userName}
                      onChange={handleChange}
                      variant="outlined"
                      className={classes.textField}
                      autoFocus
                    />
                  </Grid>
                  <Grid item>
                    <TextField
                      type="password"
                      placeholder="Password"
                      fullWidth
                      name="password"
                      value={userInformation.password}
                      onChange={handleChange}
                      variant="outlined"
                      className={classes.textField}
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      className={classes.buttonBlock}
                    >
                      Login
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color="inherit">
                {`© ${new Date().getFullYear()} Demo`}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(LogInComponent);
