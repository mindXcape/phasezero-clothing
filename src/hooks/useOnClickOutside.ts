import { RefObject, useEffect } from 'react';

// The custom hook takes a ref to an HTML element and a handler function as parameters
function useOnClickOutside(ref: RefObject<HTMLElement>, handler: () => void) {
  useEffect(() => {
    // Define a listener for mousedown events
    const listener = (event: MouseEvent) => {
      // If the click event was on or inside the ref's element, do nothing
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      // If the click event was outside the ref's element, call the handler function
      handler();
    };

    // Attach the listener to the document
    document.addEventListener('mousedown', listener);
    // Return a cleanup function that removes the listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', listener);
    };
  }, [ref, handler]); // The effect re-runs if the ref or handler changes
}

export default useOnClickOutside;
