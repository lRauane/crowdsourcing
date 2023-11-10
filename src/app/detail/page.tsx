"use client";

import Image from "next/image";
import problem from "../../assets/Rectangle 6.png";
import Address from "@/components/Address";
import CardSolution from "./components/CardSolution";
import UserComment from "./components/UserComment";
import CommentField from "./components/CommentField";
import Footer from "@/components/Footer";
import DetailProblemCard from "../components/DetailProblemCard";

const Detail = () => {
  const detailCards = [
    {
      title: "Título da Solução 1",
      description:
        " Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui  Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui ",
      amountRequired: 1000,
      votes: 9,
      voted: true,
    },
    {
      title: "Título da Solução 2",
      description:
        " Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui  Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos. Est fuga alias non neque sapiente et sint nemo qui ",
      amountRequired: 1000,
      votes: 5,
      voted: true,
    },
  ];
  // Example data for detailProblem
  const detailProblem = [
    {
      title: "Example Problem",
      imgUrl:
        "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      address: {
        city: "Example City",
        neighborhood: "Example Neighborhood",
        uf: "EX",
      },
      description: `
    Example description for the problem. 
    This is a multiline description to showcase how it might look with real data.
    Non nesciunt aspernatur ab tempora quasi sit culpa eius rem error dignissimos.
    Est fuga alias non neque sapiente et sint nemo qui labore fugit et quia quos 
    id dicta adipisci. Sed perspiciatis amet qui doloribus voluptatem in eaque unde
    quo minima iste in odit quaerat id aliquam vitae eos reprehenderit aliquid.
    Et ipsum odio eos possimus saepe ex eligendi rerum ea dignissimos dicta sed 
    atque suscipit aut architecto sequi.
  `,
    },
  ];
  return (
    <>
      <main className="flex justify-center gap-12 items-start">
        
          <div className="w-full max-w-[860px]">
            {detailProblem.map((detail, i) => (
              <DetailProblemCard detailProblem={detail} key={i} />
            ))}

            <div className="flex flex-col gap-[14px] mt-8 mb-8">
              <CommentField
                type="solution"
                name="Adicione o título..."
                placeholder="Descreva a sua solução..."
              />
              {detailCards.map((detail, i) => (
                <CardSolution
                  key={i}
                  title={detail.title}
                  description={detail.description}
                  amountRequired={detail.amountRequired}
                  votes={detail.votes}
                  voted={detail.voted}
                  onVoteClick={() => {}}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center mt-[180px] gap-3">
            <div className="flex flex-col gap-2">
              <div className="mb-4">
                <h3 className="text-4xl font-bold text-center">Discussão</h3>
                <p className="text-sm">
                  *Você pode votar até às <span>23h59</span> do dia{" "}
                  <span>00/00/0000</span>
                </p>
              </div>

              <CommentField
                type="comment"
                avatar="https://avatars.githubusercontent.com/u/102835801?v=4"
                placeholder="Adicione um comentário..."
              />
              <UserComment
                avatar="https://avatars.githubusercontent.com/u/102835801?v=4"
                name="Rauane Lima"
                text="Lorem ipsum ttatatat Lorem ipsum ttatatat Lorem ipsum ttatatat"
                timestamp="1 hora"
              />
              <UserComment
                avatar="https://avatars.githubusercontent.com/u/102835801?v=4"
                name="Rauane Lima"
                text="Lorem ipsum ttatatat Lorem ipsum ttatatat Lorem ipsum ttatatat"
                timestamp="1 hora"
              />
              <UserComment
                avatar="https://avatars.githubusercontent.com/u/102835801?v=4"
                name="Rauane Lima"
                text="Lorem ipsum ttatatat Lorem ipsum ttatatat Lorem ipsum ttatatat"
                timestamp="1 hora"
              />
            </div>
          </div>
      </main>
      <Footer />
    </>
  );
};

export default Detail;
