import React from "react";

const AccountInfo: React.FC = () => {
  return (
    <div className="flex-1 bg-white p-8 rounded-md shadow-sm">
      <h2 className="text-2xl font-bold text-blue-600 mb-6">
        Account Information
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-600 mb-1">Username</label>
          <input
            type="text"
            value="Maya atay"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Email</label>
          <input
            type="email"
            value="mayaatay4400@gmail.com"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">Phone number</label>
          <input
            type="text"
            value="536608300"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700">
          Edit
        </button>
      </div>
    </div>
  );
};

export default AccountInfo;
