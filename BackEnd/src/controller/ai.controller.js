const aiService = require('../services/ai.service');

module.exports.getReview = async (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ error: "Prompt is required" });
    }

    try {
        const response = await aiService(code);
        res.status(200).send(response);
    } catch (error) {
        console.error("Controller Error:", error.message);

        if (error.status === 429 || error.message.includes("429")) {
            return res.status(429).json({
                error: "Rate limit exceeded",
                message: "The AI is currently busy. Please wait a few seconds and try again."
            });
        }

        res.status(500).json({
            error: "Internal Server Error",
            details: error.message
        });
    }
}