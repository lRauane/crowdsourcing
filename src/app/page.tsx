import Title from "@/components/Title";
import ProblemCard from "./components/ProblemCard";

export default function Home() {
  const problems: Problem[] = [
    {
      imageUrl: 'https://jpeg.org/images/jpeg-home.jpg',
      title: 'Action',
      description: 'Solution for a problem',
      author: 'Samuel Moreira',
      address: {
        uf: 'PR',
        city: 'Maringa',
        neighborhood: 'Zona 02'
      },
      deadline: "2023-10-23",
      pix: "teste"
    },
    {
      imageUrl: 'https://jpeg.org/images/jpeg-home.jpg',
      title: 'Action',
      description: 'Solution for a problem',
      author: 'Samuel Moreira',
      address: {
        uf: 'PR',
        city: 'Maringa',
        neighborhood: 'Zona 02'
      },
      deadline: "2023-10-23",
      pix: "teste"
    },
    {
      imageUrl: 'https://jpeg.org/images/jpeg-home.jpg',
      title: 'Action',
      description: 'Solution for a problem',
      author: 'Samuel Moreira',
      address: {
        uf: 'PR',
        city: 'Maringa',
        neighborhood: 'Zona 02'
      },
      deadline: "2023-10-23",
      pix: "teste"
    },
  ]

  return (
    <main className="flex flex-col items-center">
      <div className="mt-[56px]">
        <Title content="Conheça os problemas em votação"/>
      </div>
      <div className="flex flex-wrap gap-8 w-full max-w-[1400px] justify-center py-4">
        {problems.map((problem, i) => <ProblemCard problem={problem} key={i}/>)
        }
      </div>
    </main>
  )
}