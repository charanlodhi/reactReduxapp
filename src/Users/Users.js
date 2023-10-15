import { useGetAllUsersQuery } from "../services/UsersService";
import { Grid, Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
const Users = () => {
  const { data, isError, isLoading } = useGetAllUsersQuery();
  console.log(data)
  if (isLoading) {
    return (
      <Stack spacing={1}>
        {/* For variant="text", adjust the height via font-size */}
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </Stack>
    );
  }
  if (isError) {
    return <h2>Something went wrong</h2>;
  }
  return (
    <Grid spacing={4} container>
      {data.map((user) => (
        <Grid sm={3} item key={user.id}>
          <Paper sx={{padding:4}}>
            <h2>{user.name}</h2>
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.address.city}</p>
            <Button variant="contained">View Details</Button>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Users;
