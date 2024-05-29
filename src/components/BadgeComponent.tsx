interface BadgeComponentProps {
  type: "neutral" | "error" | "warning" | "success" | "brand";
  size: "small" | "medium" | "large";
  label: string;
}

const BadgeComponent: React.FC<BadgeComponentProps> = ({
  type,
  size,
  label,
}): React.JSX.Element => {
  let badgeType = "";
  let badgeSize = "";

  switch (type) {
    case "neutral":
      badgeType = "text-neutral-600 bg-gray-50 border-neutral-200";
      break;
    case "error":
      badgeType = "text-red-600 bg-red-50 border-red-200";
      break;
    case "warning":
      badgeType = "text-amber-700 bg-amber-50 border-amber-200";
      break;
    case "success":
      badgeType = "text-green-700 bg-green-50 border-green-200";
      break;
    case "brand":
      badgeType = "text-indigo-700 bg-indigo-50 border-indigo-200";
      break;
  }

  switch (size) {
    case "small":
      badgeSize = "text-xs px-[6px] py-[2px]";
      break;
    case "medium":
      badgeSize = "text-sm px-2 py-[2px]";
      break;
    case "large":
      badgeSize = "text-sm px-[10px] py-1";
      break;
  }

  return (
    <div
      className={`border-2 rounded-2xl text-center ${badgeType} ${badgeSize}`}
    >
      {label}
    </div>
  );
};
export default BadgeComponent;
