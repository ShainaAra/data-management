import { Search } from "lucide-react";

const UserTableAction = () => {
  return (
    <div
      className="bg-white shadow-md rounded-lg px-6 py-4 flex justify-between items-center"
    >
      {/* Search Bar */}
      <div className="relative w-1/2">
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none"
          strokeWidth={2}
        />
        <input
          type="text"
          placeholder="Search by Name, Email, or Role"
          className="w-full bg-gray-100 border border-gray-200 text-gray-700 text-sm rounded-md py-[10px] pl-10 pr-3 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
        />
      </div>

      {/* Filters + Button */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <label htmlFor="status" className="text-sm font-medium text-gray-700">
            Status:
          </label>
          <select
            id="status"
            className="bg-white border border-gray-300 text-gray-800 px-3 py-2 rounded-md focus:outline-none text-sm"
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-4 py-2 rounded-md text-sm shadow transition">
          + Add new user
        </button>
      </div>
    </div>
  );
};

export default UserTableAction;
