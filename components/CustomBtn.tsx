import { CustomBtnPropsInterface } from "@/types";
import Image from "next/image";

const CustomBtn = ({
  title,
  containerStyles,
  textStyles,
  btnType,
  handleClick,
  rightIcon,
  isDisabled,
}: CustomBtnPropsInterface) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right arr"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomBtn;
