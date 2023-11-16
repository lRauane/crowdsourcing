import React from 'react';

type UserCommentProps = {
  avatar?: string;
  name?: string;
  timestamp?: string;
  text?: string;
};

const UserComment = ({ avatar, name, timestamp, text }: UserCommentProps) => (
  <div className="bg-white flex items-center p-[24px] pt-[32px] rounded-lg shadow-md w-full flex max-w-md border gap-[10px]">
    <div>
      <img src={avatar} alt="" className="w-full rounded-[50px] max-w-[50px]" />
    </div>
    <div className="flex flex-col justify-center">
      <div className="flex gap-2 items-center">
        <h3 className="text-base font-bold">{name}</h3>
        <span className="text-xs font-normal">Há {timestamp}</span>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default UserComment;
