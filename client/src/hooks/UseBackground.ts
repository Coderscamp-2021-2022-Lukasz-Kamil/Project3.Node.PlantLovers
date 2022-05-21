import { useState } from "react";

const UseBackground = () => {
  const [changeBackground, setChangeBackground] = useState(false);

  return { changeBackground, setChangeBackground };
};

export default UseBackground;
