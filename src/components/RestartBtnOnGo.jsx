// "use client";
// import { useState } from "react";
// import Link from "next/link.js";

// export default function() {
//   const [restartGame, setRestartGame] = useState(false);

//   function handleButtonClick() {
//     setRestartGame(true);
//   }
//   return (
//     <Link href={"/"}>
//       <button onClick={handleButtonClick} className="restartBtn">
//         Restart Game
//       </button>
//     </Link>
//   );
// }

"use client";
import { useState } from "react";

export default function () {
  const [restartGame, setRestartGame] = useState(false);

  function handleButtonClick() {
    setRestartGame(true); // This line might be redundant if you're reloading the page
    window.location.reload(true); // This forces a hard refresh
  }

  return (
    <button onClick={handleButtonClick} className="restartBtn">
      Restart Game
    </button>
  );
}
