import React, { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { LuFilter } from "react-icons/lu";
import { vendors } from "@/data";
import VendorCard from "../vendorcards";
import VendorSkeleton from "./vendorskeleton";
import Image from "next/image";
import useDebounce from "@/utils/debounce";

const tabs = [
  {
    id: 1,
    name: "All Vendors",
  },
  {
    id: 2,
    name: "Verified",
  },
];

const VendorDirectoryComponent: React.FC = () => {
  const [active, setActive] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [query, setQuery] = useState("");
  const [showIndustryFilter, setShowIndustryFilter] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("");

  const industryFilterDropdownRef = useRef<HTMLDivElement | null>(null);

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    // Simulate loading data
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [debouncedQuery, selectedIndustry, active]);

  const handleSetActive = (id: number) => {
    setActive(id);
  };

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  const handleShowIndustryFilter = () => {
    setShowIndustryFilter(!showIndustryFilter);
  };

  // Filter tabs based on pending or verified state
  const statusFilter = tabs.map((item, i) => (
    <button
      className="cursor-pointer"
      key={item.id}
      onClick={() => handleSetActive(item.id)}
    >
      <span
        className={`${
          item.id === active
            ? "rounded-3xl bg-[#0C323F] px-3 py-2 text-[0.75rem]  text-[#F2E4D8] sm:px-5 sm:text-[0.875rem]"
            : "rounded-3xl px-3 py-2 text-[0.75rem] text-[#76868B] sm:px-5 sm:text-[0.875rem]"
        } `}
      >
        {item.name}
      </span>
    </button>
  ));

  //filter unique industries
  const uniqueIndustries = Array.from(
    new Set(vendors.map((vendor) => vendor.industry))
  );

  // Filter vendors based on search query and selected industry
  const filteredVendors = vendors.filter((vendor) => {
    const matchesQuery = vendor.companyName
      ?.toLowerCase()
      ?.includes(debouncedQuery.toLowerCase());

    const matchesIndustry = selectedIndustry
      ? vendor.industry === selectedIndustry
      : true;

    const matchesVerification =
      active === 2 ? vendor.verificationStatus === "verified" : true;

    return matchesQuery && matchesIndustry && matchesVerification;
  });

  const skeletons = Array.from({ length: 8 });

  const vendorList = filteredVendors.map((item, i) => {
    return (
      <div key={item.id} role="button" tabIndex={0}>
        <VendorCard item={item} />
      </div>
    );
  });

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap flex-col sm:flex-row sm:items-center sm:justify-between relative">
          <div className="flex w-fit flex-wrap items-center gap-2 rounded-full py-4 sm:flex-nowrap sm:gap-1 sm:px-4 md:my-6 md:gap-0 md:border md:px-3">
            {statusFilter}
          </div>
          <div
            className={`${
              showSearchInput
                ? "pb-4 pl-1 sm:pl-0 sm:pb-0 flex items-center gap-4"
                : "pb-4 pl-8 sm:pl-0 sm:pb-0 flex items-center gap-4"
            }`}
          >
            <div className="flex relative" ref={industryFilterDropdownRef}>
              <input
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className={`rounded-r-3xl transition-width duration-500 ease-in-out overflow-hidden px-2.5 py-[11.5px] border-0 rounded ${
                  showSearchInput
                    ? "w-[16rem] sm:w-[20rem] rounded-l-3xl shadow-sm focus:outline-none focus:ring-0 ring-0 text-[0.813rem] font-300 indent-2 text-[#676767] border-[1px] border-[#e5e7eb]"
                    : "w-0 border-0 px-0 py-0 border-none"
                }`}
                value={query}
                placeholder="Search by company name"
              />
              <button
                className={`absolute right-0 rounded-full border p-3 cursor-pointer ${
                  showSearchInput ? "border-0" : ""
                }`}
                onClick={toggleSearchInput}
              >
                <FiSearch name="searchb" />
              </button>
            </div>
            <span
              className="rounded-full border p-3 cursor-pointer hover:bg-gray-100"
              onClick={handleShowIndustryFilter}
            >
              <LuFilter name="filter" />
            </span>
            {showIndustryFilter && (
              <div className="absolute z-50 top-20 right-[-7px] bg-white rounded-md shadow-lg overflow-y-auto max-h-[200px] w-[150px]">
                {uniqueIndustries.map((industry) => (
                  <div
                    key={industry}
                    onClick={() => {
                      setSelectedIndustry(industry);
                      setShowIndustryFilter(false);
                    }}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 flex items-center justify-between"
                  >
                    <span className="text-[#576D75] whitespace-nowrap font-[300] text-[0.85rem]">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {selectedIndustry && (
          <div className="text-sm text-gray-600 ">
            <span>Filtering by: </span>
            <strong>{selectedIndustry}</strong>
            <button
              onClick={() => {
                setSelectedIndustry("");
                setQuery("");
              }}
              className="ml-2 text-blue-500 underline cursor-pointer"
            >
              Clear
            </button>
          </div>
        )}
        <div className="flex w-fit gap-2 items-center justify-between mt-4 mb-6">
          {" "}
          <span>Count: </span>
          <p>{filteredVendors.length}</p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
            {skeletons.map((_, index) => (
              <VendorSkeleton key={index} />
            ))}
          </div>
        ) : (
          <>
            {filteredVendors.length === 0 ? (
              <div className="flex flex-col items-center mx-auto justify-center h-full w-full">
                <div>
                  <h2 className="text-gray-500 text-lg mb-4 text-center">
                    No vendors found
                  </h2>
                  <Image
                    src="/list-empty.png"
                    width={300}
                    height={250}
                    alt="Empty list"
                  />
                </div>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full">
                {vendorList}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default VendorDirectoryComponent;
