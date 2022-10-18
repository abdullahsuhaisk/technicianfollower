import { useContext } from "react";
import { BiExit } from "react-icons/bi";
import { clearLocalStorage } from "../../core/LocalStorageService";
import { Context as JobContext } from "../../hooks/JobContext";

import "./Header.css";

interface HeaderI {
  onLogout: () => {} | void;
  userLogged: boolean;
}

export const Header = ({ userLogged, onLogout }: HeaderI) => {
  const { clearJob } = useContext(JobContext);

  function handleLogout() {
    console.log("LOGOUT");
    onLogout();
    clearJob();
    clearLocalStorage();
  }

  return (
    <div className="header">
      <div className="flex-container-header">
        {!userLogged ? null : (
          <div
            className="logout-button flex"
            onClick={() => handleLogout()}
            data-testid="logout"
          >
            <BiExit
              style={{
                color: "rgb(255, 255, 255)",
                width: "55px",
                height: "55px",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
