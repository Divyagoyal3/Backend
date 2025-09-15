const Todo = require("../models/Todo");

// Get all todos
exports.getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({}); // saare todos fetch karega
    res.status(200).json({
      success: true,
      data: todos,
      message: "Todos fetched successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message,
    });
  }
};



// Get Todo by ID
exports.getTodoById = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findById(id);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: "Todo fetched successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      data: "Internal server error",
      message: err.message,
    });
  }
};
