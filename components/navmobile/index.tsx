import { GrClose } from "react-icons/gr";

interface MobileNavProps {
  closeModal: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ closeModal }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex animate-[slide-down-fade_1s_ease-in-out] items-start justify-end bg-black bg-opacity-50 transition-transform duration-1000 ease-in-out sm:hidden"
      onClick={closeModal}
    >
      <div
        className="h-[100%] w-full rounded-lg bg-white p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end items-center mb-12">
          <button onClick={closeModal}>
            <GrClose />
          </button>
        </div>{" "}
      </div>
    </div>
  );
};

export default MobileNav;
