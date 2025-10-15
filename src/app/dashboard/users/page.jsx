import React from "react";
import UserTableAction from "@/components/dashboard/users/UserTableAction";
import UserTable from "@/components/dashboard/users/UserTable";
import UserProfile from "@/components/dashboard/users/UserProfile"; // keep this if needed elsewhere

const UsersPage = () => {
  return (
   <div className="pt-1.5 px-5 pb-5">
      {/* Top bar section */}
      <UserTableAction />

      {/* Table section */}
      <UserTable />

      {/* Optional: UserProfile (if you want to display below or conditionally) */}
      {/* <UserProfile /> */}
    </div>
  );
};

export default UsersPage;
