import React from "react";

const FilterBar = () => {
  return (
    <div className="flex items-center justify-between bg-[#fdf4e6] px-4 py-2 text-sm">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Filter Button */}
        <button className="flex items-center gap-1 text-gray-700">
          <span className="material-icons">tune</span>
          Filter
        </button>

        {/* View Options */}
        <div className="flex items-center gap-2">
          <button className="p-1 border border-gray-300 rounded text-gray-700">
            <span className="material-icons">apps</span>
          </button>
          <button className="p-1 border border-gray-300 rounded text-gray-700">
            <span className="material-icons">list</span>
          </button>
        </div>

        {/* Divider */}
        <div className="border-l h-4 border-gray-300"></div>

        {/* Results Info */}
        <span className="text-gray-700">Showing 1–16 of 32 results</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        {/* Show Options */}
        <div className="flex items-center gap-2">
          <span className="text-gray-700">Show</span>
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-700">16</button>
        </div>

        {/* Sort Options */}
        <div className="flex items-center gap-2">
          <span className="text-gray-700">Sort by</span>
          <button className="px-3 py-1 border border-gray-300 rounded text-gray-700">
            Default
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
