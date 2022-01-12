import { RefObject } from "react";

import useEventListener from "./useEventListener";

type Handler = (event: MouseEvent) => void;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: "mousedown" | "mouseup" = "mousedown"
): void => {
  useEventListener(mouseEvent, (event: Event) => {
    const el = ref?.current;

    if (!el || el.contains(event.target as Node)) {
      return;
    }

    handler(event as unknown as MouseEvent);
  });
};

export default useOnClickOutside;
//https://usehooks-ts.com/react-hook
