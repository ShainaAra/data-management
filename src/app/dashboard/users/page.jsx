import React from "react";
import UserTableAction from "@/components/dashboard/users/UserTableAction";
import UserTable from "@/components/dashboard/users/UserTable";
import UserProfile from "@/app/dashboard/users/[userId]/UserProfile"; 

const UsersPage = () => {
  return (
   <div className="-mx-1 pt-2 pb-4">
      {/* top bar section */}
      <UserTableAction />

      {/* task table section */}
      <UserTable />

    </div>
  );
};

export default UsersPage;
