// controllers/adSettingController.js
import AdSetting from "../models/adSettingModel.js";

// Create a new adSetting
export const createAdSetting = async (req, res) => {
  try {
    const { primaryColor, secondaryColor, tertiaryColor, quaternaryColor } =
      req.body;
    const newAdSetting = new AdSetting({
      primaryColor,
      secondaryColor,
      tertiaryColor,
      quaternaryColor,
    });
    await newAdSetting.save();
    res.status(201).json({ success: true, data: newAdSetting });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get the latest adSetting
export const getLatestAdSetting = async (req, res) => {
  try {
    const latestAdSetting = await AdSetting.find();
    // const latestAdSetting = await AdSetting.find().sort({ timestamp: -1 });

    if (!latestAdSetting) {
      return res.status(404).json({
        success: false,
        message: "No records found.",
        data: null,
      });
    }
    return res.status(200).json({
      success: true,
      message: "All about data fetched successfully.",
      data: latestAdSetting,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const deleteAdSetting = async (req, res) => {
  const itemId = req.params.id;

  try {
    // Find the item by ID and remove it
    const deletedItem = await AdSetting.findByIdAndRemove(itemId);
    //   const latestAdSetting = await AdSetting.find();
    res.status(200).json({ success: true, data: deletedItem });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
