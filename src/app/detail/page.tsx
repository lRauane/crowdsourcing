"use client";

import Image from "next/image";
import problem from "../../assets/Rectangle 6.png";
import Address from "@/components/Address";
import CardSolution from "./components/CardSolution";
import CommentField from "../components/CommentField";
import Footer from "@/components/Footer";
import Title from "@/components/Title";
import Discussion from "./components/Discussion";

const Detail = () => {
  const detailCards: SolutionVoted[] = [
    {
      title: 'Título da Solução 1',
      description: " Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui  Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui ",
      amountRequired: 1000,
      votes: 9,
      voted: true,
    },
    {
      title: 'Título da Solução 1',
      description: " Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui  Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui ",
      amountRequired: 1000,
      votes: 9,
      voted: false,
    },
    {
      title: 'Título da Solução 1',
      description: " Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui  Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui ",
      amountRequired: 1000,
      votes: 9,
      voted: false,
    },
    {
      title: 'Título da Solução 2',
      description: ' Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui  Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui ',
      amountRequired: 1000,
      votes: 5,
      voted: true,
    },
  ];

  return (
    <>
    <main className="flex flex-col items-center">
    <div className="mt-[56px] mb-[48px]">
      <Title content="Titulo do problema"/>
      </div>

      <div className="flex gap-6">
        <div className="w-full max-w-[860px]">
          <Image alt="" src={problem} className="w-full aspect-card-image" />
          <div className="mt-6 flex flex-col gap-3">
            <Address city="Cidade" neighborhood="Bairro" uf="UF" />
            <p className="text-base">
              Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error
              dignissimos. Est fuga alias non neque sapiente et sint nemo qui
              labore fugit et quia quos id dicta adipisci. Sed perspiciatis amet
              qui doloribus voluptatem in eaque unde quo minima iste in odit
              quaerat id aliquam vitae eos reprehenderit aliquid. Et ipsum odio
              eos possimus saepe ex eligendi rerum ea dignissimos dicta sed
              atque suscipit aut architecto sequi.
            </p>
          </div>

          <div className="flex flex-col gap-[14px] mt-8 mb-8">
            <CommentField
              type="solution"
              name="Adicione o título..."
              placeholder="Descreva a sua solução..."
            />
            {detailCards.map((detail, i) => (
              <CardSolution
              cardSolution={detail}
              key={i}
              />
            ))
            }

          </div>
        </div>
        <div className="flex flex-col gap-3">
            <Discussion />
        </div>
      </div>
    </main>
    <Footer />
      </>
  );
};

export default Detail;