import { medibotApi } from "./medibot.js";

const handleFetch = async () => {
    const prompt = "how to prevent cancer";
    try {
      const data = await medibotApi(prompt);
      console.log("Final Parsed Data:", data);
  
      // Access prevention tips
      const preventionTips = data?.data?.prevention_tips || [];
      console.log("Prevention Tips:", preventionTips);
    } catch (error) {
      console.error("Error fetching prevention tips:", error);
    }
  };
  
  handleFetch();
  