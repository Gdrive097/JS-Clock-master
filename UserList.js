import React, { useEffect, useContext } from "react";
import { styled } from "@mui/material/styles";
import { UserContext } from "../../Context/UserContext";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import Applogo from "../../Asset/app-logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import User from "./User";
import { useNavigate } from "react-router-dom";

import DashboardLeftSidebar from "../Dashboard/DashboardLeftSidebar"
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function UserList() {
  const { users, getUser } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    getUser();
  });
  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper>
              <Box
                p={2}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Avatar sx={{ width: 50, height: 50 }} src={Applogo} alt="Logo" />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography>Developer_22</Typography>
                  <IconButton
                    aria-label="delete"
                    color="secondary"
                    onClick={logOut}
                  >
                    <LogoutIcon />
                  </IconButton>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={3} sm={3} md={2}>
            <DashboardLeftSidebar />
          </Grid>
          <Grid item xs={6} sm={6} md={9}>
            <TableContainer component={Paper}>
              <Table aria-label="customized table">
                <TableHead>
                  <TableRow sx={{ color: "red" }}>
                    <StyledTableCell align="left">Username</StyledTableCell>
                    <StyledTableCell align="left">Company Name</StyledTableCell>
                    <StyledTableCell align="left">Email</StyledTableCell>
                    <StyledTableCell align="left">First Name</StyledTableCell>
                    <StyledTableCell align="left">Last Name</StyledTableCell>
                    <StyledTableCell align="left">Phone</StyledTableCell>
                    <StyledTableCell align="right">Edit</StyledTableCell>
                    <StyledTableCell align="right">Delete</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <StyledTableRow key={user.userId}>
                      <StyledTableCell component="th" scope="row">
                        {user.userName}
                      </StyledTableCell>
                      <User user={user} />
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>

        </Grid>
      </Box>

    </>
  );
}
