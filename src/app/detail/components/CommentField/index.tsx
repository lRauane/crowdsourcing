import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "@/components/Button";

type CommentFieldProps = {
  avatar?: string;
  name?: string;
  placeholder?: string;
  type: "comment" | "solution";
};

const CommentField = ({
  avatar,
  name,
  placeholder,
  type = "comment",
}: CommentFieldProps) => {
  const [commentText, setCommentText] = useState("");
  const [solutionText, setSolutionText] = useState("");

  const handleTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCommentText(event.target.value);
    setSolutionText(event.target.value);
  };

  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      console.log("Comentário enviado: " + commentText);
      setCommentText("");
      setSolutionText("");
    }
  };

  return (
    <div className="bg-card-comment py-4 px-5 flex items-center gap-4 rounded-[10px] w-full max-w-[860px]">
      <div>
        <img
          src={avatar}
          alt=""
          className="w-full rounded-[50px] max-w-[50px]"
        />
      </div>
      <div className="w-full flex flex-col gap-2 max-w-[860px]">
        <h3 className="text-base font-bold">{name}</h3>
        <input
          type="text"
          placeholder={placeholder}
          className="border-b border-sub outline-none bg-transparent w-full"
          value={commentText}
          onChange={handleTextChange}
        />
        {type === "comment" && commentText.trim() !== "" && (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon icon="iconoir:emoji" />
              <Icon icon="uil:image-plus" />
            </div>
            <div className="flex items-center justify-center gap-4">
              <button className="text-xs font-extrabold">Cancelar</button>
              <Button
                className="rounded-[10px] text-xs font-extrabold"
                onClick={handleCommentSubmit}>
                Comentar
              </Button>
            </div>
          </div>
        )}
        {type === "solution" && solutionText.trim() !== "" && (
          <>
            <div className="flex gap-2 items-center">
              <p className="text-start text-sm">
                Quanto será preciso para realizar esta solução? 
              </p>
              <label htmlFor="price" className="font-bold text-base">R$</label>
              <input type="number" id="price" className="bg-transparent font-bold border-b-2 border-b-black outline-none w-[50px]"/>
              
            </div>
            <div className="">
              <div className="flex items-center justify-end gap-4">
                <button className="text-xs font-extrabold">Cancelar</button>
                <Button
                  className="rounded-[10px] text-xs font-extrabold"
                  onClick={handleCommentSubmit}>
                  Solução
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CommentField;
