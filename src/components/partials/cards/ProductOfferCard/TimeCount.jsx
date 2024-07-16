import { TimeCountdown } from "@/components/ui/TimeCountdown";

const TimeCount = ({ expiryDate }) => {
  return (
    <div className="absolute bottom-16 left-4 right-4 px-4 py-2">
      <TimeCountdown expiryDate={expiryDate} />
    </div>
  );
};

export default TimeCount;
