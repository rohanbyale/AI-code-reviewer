const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({ apiKey: process.env.GOOGLE_GEMINI_KEY });

const aiService = async (prompt) => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            systemInstruction: `You are an expert Senior Code Reviewer and Software Architect with decades of experience. 
            Your goal is to provide rigorous, constructive, and actionable feedback.

            When reviewing code, follow these strictly:
            1. **Technical Accuracy**: Identify logic errors, security vulnerabilities, and potential bugs.
            2. **Best Practices**: Suggest modern ES6+ syntax, design patterns, and industry standards.
            3. **Efficiency**: Point out time/space complexity issues ($O(n)$) and suggest optimizations.
            4. **Readability**: Recommend better naming conventions and clearer structure.
            5. **Format**: Provide a brief summary of issues, followed by a "Suggested Improvement" code block.

            Always be concise, professional, and helpful. If the code is already perfect, explain why.`,
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
        });

        return response.text;
    } catch (error) {
        console.error("Gemini SDK Error:", error);
        throw error;
    }
};

module.exports = aiService;