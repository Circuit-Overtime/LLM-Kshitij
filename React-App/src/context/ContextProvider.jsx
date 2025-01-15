import React, { useState, useEffect } from 'react';
import { createContext } from 'react';
import { medibotApi } from "../config/medibot"; // Import medibotApi

export const Context = createContext();

const ContextProvider = (props) => {
  const [messages, setMessages] = useState([
    {
      text: "",
      isbot: true,
    }
  ]);
  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");
  const [displayedResult, setDisplayedResult] = useState(""); // For typing animation

  const onsent = async (prompt) => {
    setResult(""); // Clear previous result
    setDisplayedResult(""); // Clear displayed result for animation
    setLoading(true); // Set loading state
    setShowResult(true); // Show result container
    setRecentPrompt(input);
    setPrevPrompt((prev) => [...prev, input]); // Add input to previous prompts

    try {
      const response = await medibotApi(input); // Call medibotApi instead of runChat
      
      // Process the response for bold formatting and line breaks
      const responseArray = response.split("**");
      let newResponse = ""; // Initialize as an empty string
      for (let i = 0; i < responseArray.length; i++) {
        if (i === 0 || i % 2 !== 1) {
          newResponse += responseArray[i];
        } else {
          newResponse += `<b>${responseArray[i]}</b>`; // Add bold formatting
        }
      }
      let newResponse2 = newResponse.split("*").join("<br>"); // Replace `*` with `<br>`
      setResult(newResponse2); // Set the formatted result
    } catch (error) {
      console.error("Error fetching response:", error);
      setResult("Failed to fetch response. Please try again."); // Handle errors gracefully
    } finally {
      setLoading(false); // Turn off loading state
      setInput(""); // Clear the input field
    }
  };

  // Typing animation effect
  useEffect(() => {
    if (result) {
      let index = 0;

      const interval = setInterval(() => {
        if (index < result.length) {
          setDisplayedResult((prev) => prev + result[index]);
          index++;
        } else {
          clearInterval(interval); // Stop the animation when complete
        }
      }, 10); // Typing speed (adjust as needed)

      return () => clearInterval(interval); // Cleanup on component unmount or state change
    }
  }, [result]);

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onsent,
    setRecentPrompt,
    recentPrompt,
    showResult,
    loading,
    result: displayedResult, // Pass the animated result
    input,
    setInput,
    messages,
    setMessages,
  };

  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
