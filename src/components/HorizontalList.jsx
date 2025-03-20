import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems, setFocus } from "../store/listSlice";

const HorizontalList = () => {
  const dispatch = useDispatch();
  const { items, focusedIndex } = useSelector((state) => state.list);
  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") {
      dispatch(setFocus((focusedIndex + 1) % items.length));
    } else if (event.key === "ArrowLeft") {
      dispatch(setFocus((focusedIndex - 1 + items.length) % items.length));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [focusedIndex, items.length]);

  return (
    <>
      <div className="flex gap-4 overflow-x-clip">
        {items
          .slice(focusedIndex)
          .concat(items.slice(0, focusedIndex))
          .map((item, index) => (
            <div
              key={item.id}
              className={`transition-transform duration-300 ease-in-out}`}
            >
              <div
                className={`w-40
                ${index === 0 ? "animate-appear scale-125 ml-5" : "scale-100"}`}
              >
                <img
                  src={item.images.artwork_portrait}
                  alt={item.title}
                  className="object-cover rounded-lg"
                />
                {index === 0 && (
                <p className="text-white text-center">{item.title}</p>
              )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default HorizontalList;