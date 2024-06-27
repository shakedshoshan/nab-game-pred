import axios from "axios";
import Table from "./Table";


export default async function Tables(){
    const Leagues = (await axios.get('http://localhost:4000/api/league')).data;

    return (
        <div>
            {Leagues.map((league: { name: string, users: String[] }) => (
                <Table tableId={league.users} />
                
            ))}

            
        </div>

    )
}