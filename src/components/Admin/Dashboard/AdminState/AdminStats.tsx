import { DollarSign, Package, MapPin, Users } from "lucide-react"; 
import StatCard from "./StatCard";

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string; // Tailwind class for background/text color
}

// --- Mock Data (Replace with real API data later) ---
const statsData: StatCardProps[] = [
  {
    title: "Total Hotel",
    value: 5,
    icon: <DollarSign className="w-6 h-6 text-white" />,
    color: "bg-indigo-500", // Purple/Indigo
  },
  {
    title: "Total Package",
    value: 5,
    icon: <Package className="w-6 h-6 text-white" />,
    color: "bg-pink-500", // Pink/Magenta
  },
  {
    title: "Subplace",
    value: 12,
    icon: <MapPin className="w-6 h-6 text-white" />,
    color: "bg-yellow-500", // Yellow/Amber
  },
  {
    title: "Total Users",
    value: 4,
    icon: <Users className="w-6 h-6 text-white" />,
    color: "bg-green-500", // Green
  },
];

// ---  Main AdminStats Component ---
export default function AdminStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 px-4 py-4">
      {statsData.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          color={stat.color}
        />
      ))}
    </div>
  );
}
