import ProtectedLayout from "../../components/layout/ProtectedLayout";

import KPICards from "../../components/dashboard/KPICards";
import DashboardCharts from "../../components/dashboard/DashboardCharts";
import RecentAssets from "../../components/dashboard/RecentAssets";

export default function Dashboard() {
  return (
    <ProtectedLayout>

      <h2
        style={{
          fontSize: "32px",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Dashboard
      </h2>

      <KPICards />

      <DashboardCharts />

      <RecentAssets />

    </ProtectedLayout>
  );
}