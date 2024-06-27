// "use client"
// import axios from "axios";
// import { Button } from "./ui/button";
// import { useEffect, useState } from "react";

// export default function CreateGroup() {
//   const [isCreating, setIsCreating] = useState(false);
//   const [error, setError] = useState(null);

//   const newUser = { "name": "pedro galvan", "leagues": [20, 36, 50] };

//   const handleCreate = async (newUser: { name: String; leagues: Number[]; }) => {
//     setIsCreating(true); // Set creating state to true
//     setError(null); // Clear any previous errors

//     try {
//       const response = await axios.post('http://localhost:4000/api/user', newUser,{
//         withCredentials: true 
//       });
//       console.log('Response:', response.data);
//     } catch (error) {
//       console.error('Error sending data:', error);
//      // setError(error); // Set error state for potential display
//     } finally {
//       setIsCreating(false); // Set creating state back to false
//     }
//   };

//   return (
//     <div className="">
//       <Button
//         onClick={() => handleCreate(newUser)}
//         className="bg-blue-500 hover:bg-blue-700 text-xl"
//         disabled={isCreating} // Disable button while creating
//       >
//         {isCreating ? "Creating..." : "Create Group"}
//       </Button>
    
//     </div>
//   );
// }


"use client"
import axios from "axios";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";


export default function CreateGroup () {
    
    const newUser = { "name": "pedro galvan", "leagues": [20, 36, 50] };
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // POST request using axios inside useEffect React hook
            axios.post('http://localhost:4000/api/user', newUser)
                .then(response => setData(response.data.id));
        };

        fetchData();

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    const handleCreate = () => {
        

        // axios.post('http://localhost:4000/api/user/', {newUser})
        //     .then(response => {
        //           if (response.status === 200) {
        //             console.log("Added user")
        //           }
        //       })
        //       .catch(error => {
        //           console.error('Error:', error);
        //       });
            
      
        // setData(data + 1);
        // console.log("newUser");
    }
    
    
        
      
    return (
        <div className="">
            {data}
            <Button type="submit" onClick={handleCreate} className="bg-blue-500 hover:bg-blue-700 text-xl">Create Group</Button>
        </div>
    )

}


