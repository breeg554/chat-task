import { useEffect, useLayoutEffect, useState } from "react";

type ReturnType = [boolean, (locked: boolean) => void];

const useLockedBody = (initialLocked = false): ReturnType => {
  const [locked, setLocked] = useState(initialLocked);

  useLayoutEffect(() => {
    if (!locked) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [locked]);

  useEffect(() => {
    if (locked !== initialLocked) {
      setLocked(initialLocked);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialLocked]);

  return [locked, setLocked];
};

export default useLockedBody;
//https://usehooks-ts.com/react-hook
