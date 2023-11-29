'use client'

import Address from "@/components/Address";
import Card from "@/components/Card";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

type CardUpdateProps = {
  avatar: string;
  name?: string;
  nameProblem?: string;
  dateTime?: string;
  description?: string;
  imgUrl?: string;
  likes?: number;
  comments?: number;
  commentsContent?: string;
};

const CardUpdate = ({ avatar }: CardUpdateProps) => {
  return (
    <div className="bg-white flex items-center p-[24px] pt-[32px] rounded-lg shadow-md w-full max-w-xl border gap-[10px]">
      <div className="">
        <img
          src={avatar}
          alt=""
          className="w-full rounded-[50px] max-w-[50px]"
        />
      </div>
      <div>
      <div className="flex items-center gap-4 flex flex">
        <h3 className="font-bold">Nome Sobrenome</h3>
        <h3 className="text-xs">Nome do problema</h3>
        <span>Há 1 hora atrás</span>
      </div>

      <div className="p-2">
        <p className="text-sm ">
          Et inventore rerum ab reprehenderit autem ut omnis pariatur! 33 rerum
          quia sit neque dolorum et neque repellat qui sapiente eius! 🚀
        </p>
      </div>
      <div className="flex justify-between border-t p-4 ">
        <div className="flex gap-6 items-center">
          <div className="flex items-center gap-1">
            <Icon icon="uil:heart" />
            <span>21</span>
          </div>
          <div className="flex items-center gap-1">
            <Icon icon="uil:comment" />
            <span>21</span>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <Icon icon="uil:eye" />
          <Link href="/detail" className="underline text-xs">
            Ver problema
          </Link>
        </div>

        <div>
          <Address city="Heliopolis" neighborhood="Rua cajazeiras" uf="BA" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default CardUpdate;
