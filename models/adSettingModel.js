// models/adSettingModel.js
import mongoose from "mongoose";

const adSettingSchema = new mongoose.Schema(
  {
    primaryColor: {
      type: String,
      required: true,
    },
    secondaryColor: {
      type: String,
      required: true,
    },
    tertiaryColor: {
      type: String,
      required: true,
    },
    quaternaryColor: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const AdSetting = mongoose.model("AdSetting", adSettingSchema);

export default AdSetting;
