// eslint-disable-next-line react/prop-types
export default function NavigationContainer({ children }) {
  const navigationContainer = {
   
    backgroundImage: "linear-gradient(#201358, #14121D 20%, #151515)",
    borderRadius: "5px",
    boxSizing: "border-box",
    padding: "0 20px",
    maxWidth: "1440px",
  };

  return <div style={navigationContainer}>{children}</div>;
}
