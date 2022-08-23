import CloseIcon from "@mui/icons-material/Close";
import { Alert, IconButton } from "@mui/material";
import { FC } from "react";
import { AlertType } from "../types";
import { useAlerts } from "../utils/AlertContext";

interface AlertProps {
  id: number;
  message: string;
  type: AlertType;
}

const AppAlert: FC<AlertProps> = ({ id, message, type }) => {
  const alertContext = useAlerts();
  if (!message) {
    return null;
  }

  return (
    <Alert
      action={
        <IconButton
          aria-label="close"
          color="inherit"
          size="small"
          onClick={() => {
            alertContext.removeAlert(id);
          }}
        >
          <CloseIcon fontSize="inherit" />
        </IconButton>
      }
      sx={{ mb: 2 }}
      severity={type}
    >
      {message}
    </Alert>
  );
};

export default AppAlert;
