import mongoose from "mongoose";

const assetSchema = new mongoose.Schema(
  {
    assetName: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    serialNumber: {
      type: String,
      required: true,
      unique: true,
    },

    status: {
      type: String,
      enum: [
        "Available",
        "Allocated",
        "Maintenance",
        "Booked",
      ],
      default: "Available",
    },

    condition: {
      type: String,
      enum: ["Excellent", "Good", "Fair", "Damaged"],
      default: "Excellent",
    },

    purchaseDate: {
      type: Date,
    },

    location: {
      type: String,
      default: "Main Office",
    },

    description: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Asset", assetSchema);