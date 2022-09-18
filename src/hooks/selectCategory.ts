import { useState } from "react";

const useCategory = (initialState = "카테고리를 선택해주세요.") => {
  const [activeCategory, setActiveCategory] = useState<string>(initialState);

  const clickCategory = (category: string) => {
    setActiveCategory(category);
  }

  return { activeCategory, clickCategory };
};

export default useCategory;
