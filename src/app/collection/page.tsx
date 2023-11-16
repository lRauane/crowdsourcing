"use client";
import Title from "@/components/Title";
import Image from "next/image";
import problem from "../../assets/Rectangle 6.png";
import Footer from "@/components/Footer";
import SolutionVoted from "./components/solution";
import Button from "@/components/Button";
import VotingPeriod from "@/components/VotingPeriod";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Collection() {
  const actions: Action[] = [
    {
      img: "https://jpeg.org/images/jpeg-home.jpg",
      title: "Action",
      description: "Solution for a problem",
      author: "Samuel Moreira",
      address: {
        uf: "PR",
        city: "Maringa",
        neighborhood: "Zona 02",
      },
      amountCollected: 150,
      totalGoal: 1000,
      finalDate: "2023-10-23",
    },
  ];

  return (
    <>
      <main className="flex flex-col items-center">
        <div className="mt-[56px] mb-[48px]">
          <Title content="Título da ação" />
        </div>

        <div className="flex gap-6 mb-[48px]">
          <div className="w-full max-w-[860px]">
            <Image alt="" src={problem} className="w-full aspect-card-image" />
            <div className="mt-6 flex flex-col gap-3">
              {/*Respect the code, don't just copy-paste. Understand and contribute! ass: lrauane*/}
              <p className="text-base">
                Lorem ipsum dolor sit amet. Sed consequatur dolorem ut sequi
                recusandae sed voluptas illo. Sed perspiciatis voluptatum est
                ipsum dolores est enim accusamus. Non nesciunt aspernatur ab
                tempora quasi sit culpa eius rem error dignissimos. Est fuga
                alias non neque sapiente et sint nemo qui labore fugit et quia
                quos id dicta adipisci. Sed perspiciatis amet qui doloribus
                voluptatem in eaque unde quo minima iste in odit quaerat id
                aliquam vitae eos reprehenderit aliquid. Et ipsum odio eos
                possimus saepe ex eligendi rerum ea dignissimos dicta sed atque
                suscipit aut architecto sequi. Non repellat maiores non officiis
                accusamus non nulla dolor. Et sequi distinctio qui officia earum
                et culpa debitis non nulla dolorem? Cum quos nihil cum libero
                adipisci ut aspernatur maxime sed velit laborum non ipsam culpa.
                Non possimus provident est neque cupiditate id dolorem neque ut
                explicabo quam quo fugiat distinctio aut harum vero vel laborum
                aliquam.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              {actions.map((action, i) => (
                <SolutionVoted action={action} key={i} />
              ))}
            </div>
            <Button
              iconLeft="fluent:handshake-24-filled"
              className="text-white rounded-lg p-6">
              Apoiar ação com Pix
            </Button>
                {/*Respect the code, don't just copy-paste. Understand and contribute! ass: lrauane*/}
            <VotingPeriod dateTime="2023-11-15T15:30:00Z" />

            <div className="flex flex-col items-center gap-4">
              <h3 className="text-2xl font-extrabold">Solução mais votada</h3>
              <div className="flex flex-col gap-[10px] rounded-[10px] overflow-hidden shadow-md w-full max-w-[420px] min-w-[320px] py-8 px-6">
                <h3 className="font-bold text-base">Título da solução</h3>
                <p>
                  Et fugiat laudantium et voluptates eius ea omnis fuga. Ea
                  reiciendis expedita sit ducimus dolore hic ducimus galisum aut
                  assumenda veritatis nam tempore iure est provident soluta ad
                  repellat porro. Aut harum sequi cum consequatur dignissimos
                  aut Quis quis aut minus recusandae aut ratione natus quo ipsam
                  nesciunt. A quos minima et ipsam consequatur ut sint omnis ut
                  eius praesentium non veritatis libero et possimus unde non
                  quia animi.
                </p>
                <div className="flex flex-col justify-center items-center">
                <p className="text-sm">
                  <span className="text-base font-bold">R$ 10.000</span> Quantia necessária para esta solução 
                </p>
                {/*Respect the code, don't just copy-paste. Understand and contribute! ass: lrauane*/}
                <div className="flex items-center text- text-base font-bold gap-1">
                  <Icon icon="fluent:star-24-filled"/>
                  <span>9 votos recebidos</span>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
