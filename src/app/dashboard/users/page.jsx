import React from "react";
import UserTableAction from "@/components/dashboard/users/UserTableAction";
import UserTable from "@/components/dashboard/users/UserTable";
<<<<<<< HEAD
import UserProfile from "@/app/dashboard/users/[userId]/UserProfile"; // keep this if needed elsewhere
=======
>>>>>>> c9f60be376ff25e33c31c1a23d615295ce7bae05

const UsersPage = () => {
  return (
   <div className="-mx-1 pt-2 pb-4">
      {/* top bar section */}
      <UserTableAction />

      {/* task table section */}
      <UserTable />

<<<<<<< HEAD
      {/* User Profile */}
      <UserProfile />
=======
>>>>>>> c9f60be376ff25e33c31c1a23d615295ce7bae05
    </div>
  );
};

export default UsersPage;
