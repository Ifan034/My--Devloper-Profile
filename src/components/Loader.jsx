// Importing necessary components from @react-three/drei
import { Html, useProgress } from "@react-three/drei";

// CanvasLoader component definition
const CanvasLoader = () => {
  // Using the useProgress hook to get the loading progress
  const { progress } = useProgress();

  return (
    // Html component to render HTML elements in the 3D scene
    <Html
      as='div' // Render as a div element
      center // Center the content
      style={{
        display: "flex", // Use flexbox for layout
        justifyContent: "center", // Center content horizontally
        alignItems: "center", // Center content vertically
        flexDirection: "column", // Arrange content in a column
      }}
    >
      {/* Loader animation */}
      <span className='canvas-loader'></span>
      {/* Display loading progress */}
      <p
        style={{
          fontSize: 14, // Font size
          color: "#F1F1F1", // Text color
          fontWeight: 800, // Font weight
          marginTop: 40, // Margin top
        }}
      >
        {progress.toFixed(2)}% {/* Display progress as a percentage with two decimal places */}
      </p>
    </Html>
  );
};

// Exporting the CanvasLoader component
export default CanvasLoader;