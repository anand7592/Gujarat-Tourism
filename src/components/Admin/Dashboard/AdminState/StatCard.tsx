import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// --- Define the Data Structure ---
interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string; // Tailwind class for background/text color
}
// ---  Stat Card Component ---
function StatCard({ title, value, icon, color }: StatCardProps) {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-500">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-full ${color}`}>{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  );
}
export default StatCard;
