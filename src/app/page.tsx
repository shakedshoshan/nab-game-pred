import { Button } from "@/components/ui/button";
import Image from "next/image";


export default async function Home() {
  const userInfo = await (await fetch('http://localhost:4000/api/user')).json()
  console.log(userInfo)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="items-center justify-center flex flex-col">
        <h1 className="py-10 text-5xl font-semibold">welcome to nba prediction game</h1>
        <div className="flex flex-row space-x-6">
          <Button className="bg-blue-500 hover:bg-blue-700 text-xl">Create Group</Button>
          <Button className="bg-blue-500 hover:bg-blue-700 text-xl">join Group</Button>
        </div>
        {userInfo.map((user: { name: string, leagues: any }) => (
          <h1 key={user.name}>{user.name} {user.leagues}</h1>
        ))}

        <h1>{userInfo[0].name} {userInfo[0].leagues}</h1>
      </div>
    </main>
  );
}
