const { Thought, User } = require("../models");

const thoughtController = { 
    // Get all thoughts 
    async getAllThoughts(req, res) { 
        try { 
            const thoughtData = await Thought.find().select("-__v");

            res.status(200).json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // Get 1 thought by its ID 
    async getOneThought(req, res) {
        try { 
            const thoughtData = await Thought.findOne({ 
                _id: req.params.thoughtId,
            }).select("-__v");

            if (!thoughtData) {
                return res
                .status(404)
                .json({ message: "This thought does not exist." });
            }

            res.status(200).json(thoughtData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // Create a thought 
    async createThought(req, res) {
        try { 
            const thoughtData = await Thought.create(req.body);
            const userData = await User.findOneAndUpdate(
                { _id: req.body.userId },
                { $push: { thoughts: thoughtData._id} },
                { new: true }
            );
            
            if (!userData) {
                return res.status(404).json({
                    message: 
                    "This user does not exist. However, the thought was still created"
                });
            }

            res.status(200).json({ message: "Thougt was successfully created." });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    // Update a thought by its id 
    async updateThought(req, res) {
        
    }
}