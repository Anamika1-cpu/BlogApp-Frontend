import React, { useEffect } from "react";
import AdminNavbar from "./Admin/AdminNavbar";
import PrivateNavbar from "./Private/PrivateNavbar";
import PublicNavbar from "./Public/PublicNavbar";
import { useDispatch, useSelector } from "react-redux";
import AccountVerificationAlertWarning from "./Alerts/AccountVerificationAlertWarning";

const Navbar = () => {
  const state = useSelector((state) => state?.users);
  const { userAuth, userProfile } = state;
  const isAdmin = userAuth?.isAdmin;
  const isAccountVerified = userProfile?.isAccountVerified;
  console.log(userProfile);

  return (
    <>
      {isAdmin ? (
        <AdminNavbar isLogin={userAuth} />
      ) : userAuth ? (
        <PrivateNavbar isLogin={userAuth} />
      ) : (
        <PublicNavbar />
      )}
      {/*  Alert  */}
      {!isAccountVerified && <AccountVerificationAlertWarning />}
    </>
  );
};

export default Navbar;
