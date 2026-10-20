import { Link } from "react-router-dom";
import { CheckCheck, Send, ChevronRight } from "lucide-react";
import useMockFetch from "../../hooks/useMockFetch";
import StateMessage from "../common/StateMessage";

const activities = [
  {
    id: 1,
    type: "accepted",
    message: "Your request for Cassava was accepted by Farmer John",
    time: "2 hrs ago",
  },
  {
    id: 2,
    type: "sent",
    message: "You sent a request for Tomato Jos to Farmer Jeckerson",
    time: "3 hrs ago",
  },
  {
    id: 3,
    type: "sent",
    message: "You sent a request for Senkes Rice to Farmer Jumbo",
    time: "3 hrs ago",
  },
];

const iconStyles = {
  accepted: { Icon: CheckCheck, className: "bg-green-100 text-green-600" },
  sent: { Icon: Send, className: "bg-sky-100 text-sky-600" },
};

const RecentActivity = () => {
  const { status, data, retry } = useMockFetch(activities);

  return (
    <section className="mt-8">
      <div className="mb-4 flex items-center justify-between gap-2">
        <h2 className="text-xl font-semibold text-gray-900 md:text-2xl">
          Recent Activity
        </h2>
        <Link
          to="/activity"
          className="flex shrink-0 items-center gap-1 text-sm text-gray-600 hover:text-green-600"
        >
          View all Activity <ChevronRight size={16} />
        </Link>
      </div>

      {status !== "success" || data.length === 0 ? (
        <StateMessage
          status={status}
          emptyText="No recent activity yet."
          onRetry={retry}
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.map(({ id, type, message, time }) => {
            const { Icon, className } = iconStyles[type];
            return (
              <div
                key={id}
                className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-3"
              >
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${className}`}
                >
                  <Icon size={18} />
                </span>

                <div className="min-w-0 flex-1 xl:flex xl:items-center xl:justify-between xl:gap-3">
                  <p className="text-sm text-gray-800">{message}</p>
                  <span className="mt-1 block shrink-0 text-xs text-gray-400 xl:mt-0">
                    {time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default RecentActivity;
