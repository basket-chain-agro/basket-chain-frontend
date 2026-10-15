

import {
  ClipboardList,
  CheckCheck,
  Heart,
  PackagePlus,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import useMockFetch from "../../hooks/useMockFetch";
import StateMessage from "../common/StateMessage";

const summaryData = [
  { id: 1, label: "Active Requests", value: 5, change: 3, icon: ClipboardList },
  { id: 2, label: "Completed Orders", value: 21, change: 6, icon: CheckCheck },
  { id: 3, label: "Saved Products", value: 3, change: -2, icon: Heart },
  { id: 4, label: "New This Week", value: 45, change: 10, icon: PackagePlus },
];

const SummaryCard = ({ label, value, change, icon: Icon }) => {
  const isUp = change >= 0;
  const TrendIcon = isUp ? TrendingUp : TrendingDown;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-4 md:p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
          <Icon size={18} />
        </span>
        <p className="text-sm text-gray-800 md:text-base">{label}</p>
      </div>

      <div className="mt-5 flex items-center gap-2">
        <p className="text-3xl font-medium text-gray-900">
          {String(value).padStart(2, "0")}
        </p>
        <span
          className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${
            isUp ? "bg-green-100 text-green-600" : "bg-red-100 text-red-500"
          }`}
        >
          {isUp ? `+${change}` : change}
          <TrendIcon size={12} />
        </span>
      </div>
    </div>
  );
};

const SummaryCards = () => {
  const { status, data, retry } = useMockFetch(summaryData);

  return (
    <section aria-label="Summary" className="mt-6">
      {status !== "success" || data.length === 0 ? (
        <StateMessage
          status={status}
          emptyText="No summary available yet."
          onRetry={retry}
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item) => (
            <SummaryCard key={item.id} {...item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SummaryCards;
