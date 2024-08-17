import { cn } from "../../lib/cn";
import Center from "./Center";

export default function Title({
  title,

  exSt,
  exStTitle,
}: {
  title?: string;

  exSt?: string;
  exStTitle?: string;
}) {
  return (
    <Center>
      <div
        className={cn(
          "flex text-center  w-full mt-[96px] mb-[24px] leading-[35px] flex-col  justify-center items-center",
          exSt && exSt
        )}
      >
        {title && (
          <div
            className={cn(
              "md:text-[36px] text-[24px] font-[600] ",
              exStTitle && exStTitle
            )}
          >
            {title}
          </div>
        )}
      </div>
    </Center>
  );
}
