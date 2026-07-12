import Chip from "@mui/material/Chip";

export default function StatusBadge({ status }) {
  const config = {
    Available: {
      label: "Available",
      color: "success",
    },
    Allocated: {
      label: "Allocated",
      color: "primary",
    },
    Maintenance: {
      label: "Maintenance",
      color: "warning",
    },
  };

  const badge = config[status] || {
    label: status,
    color: "default",
  };

  return (
    <Chip
      label={badge.label}
      color={badge.color}
      size="small"
    />
  );
}