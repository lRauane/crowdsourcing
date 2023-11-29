'use client'
import CommentField from "../components/CommentField";
import Discussion from "../detail/components/Discussion";
import CardUpdate from "./components/CardUpdate";

export default function Timeline() {
  return (
    <main className="flex justify-around items-start mt-[56px] mb-[48px]">
      <div className="flex flex-col gap-6">
      <CommentField
        type="comment"
        avatar="https://avatars.githubusercontent.com/u/102835801?v=4"
        placeholder="Adicione um comentário..."
      />
      <CardUpdate avatar="https://avatars.githubusercontent.com/u/102835801?v=4" />
      </div>
      <div>
      <Discussion />
      </div>
    </main>
  );
}
