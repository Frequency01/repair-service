import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepairs } from "../redux/actions";
import RepairCard from "./RepairCard";
import CircularProgress from "@material-ui/core/CircularProgress";
import Grid from "@material-ui/core/Grid";
import Alert from "./Alert";
import { hideAlert } from "../redux/actions";

const Dashboard = () => {
  const dispatch = useDispatch();
  const repairs = useSelector((state) => state.repairs.repairsList);
  const isLoading = useSelector((state) => state.app.loading);
  const alert = useSelector((state) => state.app.alert);

  useEffect(() => {
    dispatch(fetchRepairs());
  }, []);

  if (alert) {
    return (
      <Alert
        onReset={() => {
          dispatch(hideAlert());
          dispatch(fetchRepairs());
        }}
        alert={alert}
      />
    );
  }
  if (isLoading) {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <CircularProgress />
      </Grid>
    );
  }
  return (
    <Grid container direction="row" justify="center" alignItems="center">
      {repairs.map((repair) => {
        return (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={repair.id}>
            <RepairCard repair={repair} key={repair.id} />
          </Grid>
        );
      })}
    </Grid>
  );
};
export default Dashboard;
