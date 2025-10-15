import React from "react";
import UserTableAction from "@/components/dashboard/users/UserTableAction";
import UserTable from "@/components/dashboard/users/UserTable";
import UserProfile from "@/components/dashboard/users/UserProfile"; // keep this if needed elsewhere

const UsersPage = () => {
  return (
   <div className="-mx-2 pt-2 pb-4">
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
