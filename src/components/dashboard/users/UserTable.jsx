const UserTable = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 mt-4">
      <div className="px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">User Management</h2>
      </div>

      <table className="w-full text-left text-sm">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th className="py-3 px-6 font-semibold border-b">Name</th>
            <th className="py-3 px-6 font-semibold border-b">Email</th>
            <th className="py-3 px-6 font-semibold border-b">Status</th>
            <th className="py-3 px-6 font-semibold border-b">Last Active</th>
            <th className="py-3 px-6 font-semibold border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-center py-6 text-gray-500" colSpan="5">
              No users available
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
