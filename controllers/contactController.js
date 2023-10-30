import Contact from "../models/contactModel.js";

export const addContact = async (req, res) => {
  const { name, email, message } = req.body;
  //   console.log(name, email, message);
  try {
    // let about = await About.findOne();
    // if (!about) {
    let contact = new Contact({ name, email, message });
    // } else {
    //   about.content = content;
    // }

    const addData = await contact.save();
    return res.status(200).json({
      success: true,
      message: "Data updated successfully.",
      data: addData,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
