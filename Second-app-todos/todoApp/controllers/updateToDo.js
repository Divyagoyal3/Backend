const Todo = require("../models/Todo");
// Update Todo by ID
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;   // URL se ID
    const { title, description, completed } = req.body; // body se data

    const todo = await Todo.findByIdAndUpdate(
      {_id:id},
      { title, description, updatedAt:Date.now()},
    )

    // if (!updateTodo) {
    //   return res.status(404).json({
    //     success: false,
    //     message: "Todo not found",
    //   });
    // }

    res.status(200).json({
      success: true,
      data: todo,
      message: "Todo updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message,
    });
  }
};
