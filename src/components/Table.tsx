import axios from "axios";

type Props = { tableId: String[]}

export default async function Table({tableId}: Props){
    const userInfo = (await axios.get(`http://localhost:4000/api/user`)).data;
    return(
        <div className="bg-slate-300 shadow-2xl p-6 hover:scale-105 transition rounded-2xl mt-4">
            <h1 className="font-semibold">Table Name:</h1>
            <hr className=" pb-4"/>

            {userInfo.slice(0,8).map((user: { name: string, leagues: any }, index: number) => (
            <h1 key={user.name} className="flex items-center justify-between"> {/* Container with flexbox and justify-between */}
            <span className="mr-2">{index + 1}.</span> {/* Counter */}
            <div className="flex-grow border-l border-gray-300 pl-4"> {/* Divider */}
              <span className="mr-2">{user.name}</span> {/* User Name */}
              <span className="px-2">  {/* Clack Spacer */}
                {/* (Optional) Add your clack icon or text here */}
              </span>
            </div>
            <span className="flex-grow text-right">{user.leagues}</span> {/* Leagues on the right (flex-grow, text-right) */}
          </h1>
            ))}
        </div>
    )

}

