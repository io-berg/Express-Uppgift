import { createContext, FC, useContext, useState } from "react";
import { AlertType, Alert } from "../types";

type AlertContextType = {
  alerts: Alert[];
  addAlert: (message: string, type: AlertType) => void;
  removeAlert: (id: number) => void;
};

const AlertContext = createContext<AlertContextType | undefined>(undefined);

interface AlertProviderProps {
  children: React.ReactNode;
}

export const AlertProvider: FC<AlertProviderProps> = ({ children }) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const addAlert = (message: string, type: AlertType) => {
    const newAlert = { id: Date.now(), message, type };
    setAlerts([...alerts, newAlert]);
  };

  const removeAlert = (id: number) => {
    setAlerts(alerts.filter((alert) => alert.id !== id));
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, removeAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlerts = () => {
  return useContext(AlertContext);
};
