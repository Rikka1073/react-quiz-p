import { useState } from "react";

export const QUESTION = "Reactはどのようなものですか？";
export const ANSWERS = ["データベース", "フレームワーク", "ライブラリ", "言語"];
export const CORRECT_ANSWER = "ライブラリ";

export const UseselectAnswer = () => {
  const [userSelect, setUserSelect] = useState("");
  const [result, setResult] = useState("");
  const onclickUser = (answer: string) => {
    setUserSelect(answer);
    if (answer === CORRECT_ANSWER) {
      setResult("正解です");
    } else {
      setResult("残念、不正解です");
    }
  };

  return { userSelect, result, onclickUser };
};
