import Home from "../models/infoModel.js";

export const createHomeController = async (req, res) => {
  const { proName, tech, contactLink, phoneNo } = req.body;
  const image =
    req.files && req.files["image"] ? req.files["image"][0].filename : null;
  const resumefile =
    req.files && req.files["resumefile"]
      ? req.files["resumefile"][0].filename
      : null;

  try {
    // Validation
    if (!proName || !tech || !contactLink) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields.",
      });
    }

    const newHome = new Home({
      proName,
      tech,
      contactLink,
      phoneNo,
      image,
      resumefile,
    });

    await newHome.save();

    return res.status(201).json({
      success: true,
      message: "Home data created successfully.",
      data: newHome,
    });
  } catch (error) {
    console.error("Error creating Home data:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while creating Home data.",
      error: error.message,
    });
  }
};

// Controller to fetch all data
export const getHomeController = async (req, res) => {
  try {
    const data = await Home.find();
    return res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while fetching data.",
      error: error.message,
    });
  }
};

export const deleteHomeController = async (req, res) => {
  const itemId = req.params.id;

  try {
    // Find the item by its ID and remove it from the database
    const deletedItem = await Home.findByIdAndRemove(itemId);

    if (!deletedItem) {
      return res.status(404).json({
        success: false,
        message: "Item not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Item deleted successfully.",
      data: deletedItem,
    });
  } catch (error) {
    console.error("Error deleting item:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while deleting the item.",
      error: error.message,
    });
  }
};

export const editHomeController = async (req, res) => {
  const itemId = req.params.id;
  const { proName, tech, contactLink } = req.body;
  const image = req.file ? req.file.filename : null; // Updated image if provided

  try {
    // Find the item by its ID and update its fields
    const updatedItem = await Home.findByIdAndUpdate(
      itemId,
      {
        proName,
        tech,
        contactLink,
        image,
      },
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({
        success: false,
        message: "Item not found.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Item updated successfully.",
      data: updatedItem,
    });
  } catch (error) {
    console.error("Error updating item:", error);
    return res.status(500).json({
      success: false,
      message: "An error occurred while updating the item.",
      error: error.message,
    });
  }
};
