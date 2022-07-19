const router = require("express").Router();

const { 
    getAllUsers,
    getOneUser,
    newUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend,
} = require("../../controllers/userController");

// ROUTE for /api/users
router.route("/").get(getAllUsers).post(newUser);

//route for /api/users/:userId
router.route("/:userId").get(getOneUser).put(updateUser).delete(deleteUser);

// route for /api/users/:userId/friends
router.route("/:userId/friends").post(addFriend);

//route for /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").delete(deleteFriend);

module.exports = router;