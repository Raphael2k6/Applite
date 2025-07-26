import { MdOutlinePeople } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { Vendor } from "@/data";
import { MdVerifiedUser, MdLocationOn } from "react-icons/md";
import { VscUnverified } from "react-icons/vsc";
import { BsCalendarDateFill } from "react-icons/bs";

interface VendorCardProps {
  item: Vendor;
  className?: string;
}

const VendorCard: React.FC<VendorCardProps> = ({ item, className }) => {
  console.log("VendorCard item:", item);
  return (
    <div
      className={`${
        className
          ? className
          : "relative h-[24rem] w-[19rem] xl:w-[25rem] rounded-3xl border-[#eeeeee] bg-white hover:shadow-lg"
      }`}
    >
      <div
        className={`${
          item.verificationStatus === "verified"
            ? "pt-2 bg-emerald-100"
            : "bg-[#fff4ed]"
        } flex gap-2 rounded-t-2xl items-center py-1 px-6`}
      >
        {item.verificationStatus === "pending" && (
          <VscUnverified color="b9530b" fontSize={25} />
        )}
        {item.verificationStatus === "pending" ? (
          <p className="text-[#b9530b] text-[13px] font-[300]">
            Pending Verification
          </p>
        ) : (
          <div className="flex items-center gap-1">
            <MdVerifiedUser color="0C323F" fontSize={25} />
            <span className="text-[#1f6681] text-[13px] font-[300]">
              Verified
            </span>
          </div>
        )}
      </div>
      <div className="px-6">
        <div className="w-9/12">
          <p className="text-[1.2rem] capitalize font-[400] py-2.5 text-[#103C4C] leading-6">
            {item.companyName.substring(0, 100).toLowerCase()}{" "}
            {item?.companyName.length > 35 && "..."}{" "}
          </p>
        </div>

        <div className="mb-2.5">
          <p className="text-[12px] font-[200] text-gray-600 leading-5">
            {item.industry.slice(0, 140)} {item?.industry.length > 45 && "..."}
          </p>
        </div>
        <div className="mb-2.5">
          <div className="w-fit text-[#083545] flex items-center px-2 py-1.5 border rounded-md gap-2 mt-1">
            <MdLocationOn />
            <span className="text-[12px] font-[200]">{item.location}</span>
          </div>
        </div>
        <div className="mb-2.5">
          <p className="text-[0.7rem] capitalize font-[400] text-[#103C4C] leading-6">
            Joined since
          </p>
          <div className="flex items-center gap-1 text-[#083545] text-[12px] font-[200]">
            {" "}
            <BsCalendarDateFill />
            <span className="text-[12px] font-[200]">{item.dateAdded}</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mt-3">
            <div className="flex gap-2 items-center">
              <MdOutlinePeople />
              <span className="text-[#073449] text-[0.8rem] font-[300]">0</span>
            </div>
            <div className=" text-gray-500">|</div>
            <div className="flex gap-1 items-center">
              <div>
                <IoMdStar color="#FFC850" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorCard;
