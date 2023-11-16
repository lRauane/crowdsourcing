"use client";

import CommentField from "@/app/components/CommentField";
import UserComment from "@/app/components/UserComment";
import VotingPeriod from "@/components/VotingPeriod";

const Discussion = () => {
  const userComment = [
    {
      avatar: "https://avatars.githubusercontent.com/u/102835801?v=4",
      name: "Rauane Lima",
      text: "Lorem ipsum ttatatat Lorem ipsum ttatatat Lorem ipsum ttatatat",
      timestamp: "1 hora",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/102835801?v=4",
      name: "Rauane Lima",
      text: "Lorem ipsum ttatatat Lorem ipsum ttatatat Lorem ipsum ttatatat",
      timestamp: "1 hora",
    },
    {
      avatar: "https://avatars.githubusercontent.com/u/102835801?v=4",
      name: "Rauane Lima",
      text: "Lorem ipsum ttatatat Lorem ipsum ttatatat Lorem ipsum ttatatat",
      timestamp: "1 hora",
    },
  ];

  return (
    <div className="flex flex-col gap-2 mb-[32px]">
      <h3 className="text-4xl font-bold text-center">Discussão</h3>
      <VotingPeriod dateTime="2023-11-15T15:30:00Z" />

      <CommentField
        type="comment"
        avatar="https://avatars.githubusercontent.com/u/102835801?v=4"
        placeholder="Adicione um comentário..."
      />
      {userComment.map((comment, i) => (
        <UserComment
          avatar={comment.avatar}
          name={comment.name}
          timestamp={comment.timestamp}
          text={comment.text}
          key={i}
        />
      ))}
    </div>
  );
};

export default Discussion;
