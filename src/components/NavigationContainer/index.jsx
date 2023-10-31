// eslint-disable-next-line react/prop-types
export default function NavigationContainer({ children }) {
  const navigationContainer = {
    backgroundImage: "linear-gradient(#201358, #14121D 20%, #151515)",
    borderRadius: "5px",
    boxSizing: "border-box",
    height: "100%",
    padding: "0 20px",
    width: "100%",
  };

  return <div style={navigationContainer}>{children}</div>;
}
