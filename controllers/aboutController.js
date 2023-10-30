// controllers/aboutController.js
import About from "../models/aboutModel.js";

export const getAbout = async (req, res) => {
  try {
    const aboutData = await About.find(); // Retrieve all documents from the About collection
    return res.status(200).json({
      success: true,
      message: "All about data fetched successfully.",
      data: aboutData,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateAbout = async (req, res) => {
  const { content } = req.body;
  console.log(content);
  try {
    // let about = await About.findOne();
    // if (!about) {
    let about = new About({ content });
    // } else {
    //   about.content = content;
    // }

    const updatedAbout = await about.save();
    return res.status(200).json({
      success: true,
      message: "Item updated successfully.",
      data: updatedAbout,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE route to delete an item by ID
export const deleteAboutCtrl = async (req, res) => {
  const itemId = req.params.id;

  try {
    // Find the item by ID and remove it
    const deletedItem = await About.findByIdAndRemove(itemId);

    if (!deletedItem) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.json({ success: true, message: "Item deleted successfully" });
  } catch (error) {
    console.error("Error deleting item:", error);
    res.status(500).json({ message: "Failed to delete item" });
  }
};
