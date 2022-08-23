import { Stack } from "@mui/material";
import { FC } from "react";
import { useAlerts } from "../utils/AlertContext";
import AppAlert from "./AppAlert";

const AlertsContainer: FC = () => {
  const alertContext = useAlerts();

  return (
    <Stack
      spacing={2}
      sx={{ position: "absolute", top: "0", right: "0", margin: "1rem" }}
    >
      {alertContext.alerts.map((alert) => (
        <AppAlert
          key={alert.id}
          id={alert.id}
          message={alert.message}
          type={alert.type}
        />
      ))}
    </Stack>
  );
};

export default AlertsContainer;
