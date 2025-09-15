const Todo  = require("../models/Todo");

// Delete Todo by ID
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

     await Todo.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      err: err.message,
    });
  }
};

