import ActionCard from "./components/ActionCard";

export default function Home() {
  const actions: Action[] = [
    {
      img: 'https://jpeg.org/images/jpeg-home.jpg',
      title: 'Action',
      description: 'Solution for a problem',
      author: 'Samuel Moreira',
      address: {
        uf: 'PR',
        city: 'Maringa',
        neighborhood: 'Zona 02'
      },
      amountCollected: 150,
      totalGoal: 1000,
      finalDate: "2023-10-23"
    },
    {
      img: 'https://jpeg.org/images/jpeg-home.jpg',
      title: 'Action 2',
      description: 'Solution for a problem 2',
      author: 'Samuel Moreira',
      address: {
        uf: 'PR',
        city: 'Maringa',
        neighborhood: 'Zona 02'
      },
      amountCollected: 150,
      totalGoal: 1000,
      finalDate: "2023-10-23"
    },
    {
      img: 'https://jpeg.org/images/jpeg-home.jpg',
      title: 'Action 2',
      description: 'Solution for a problem 2',
      author: 'Samuel Moreira',
      address: {
        uf: 'PR',
        city: 'Maringa',
        neighborhood: 'Zona 02'
      },
      amountCollected: 150,
      totalGoal: 1000,
      finalDate: "2023-10-23"
    },
  ]

  return (
    <main className="flex flex-col items-center">
      <div className="mt-[56px]">
        <h1 className="text-[56px] text-black font-extrabold text-center">Escolha uma ação para apoiar</h1>
      </div>
      <div className="flex flex-wrap gap-8 w-full max-w-[1400px] justify-center py-4">
        {actions.map((action, i) => <ActionCard action={action} key={i}/>)
        }
      </div>
    </main>
  )
}
