// import { useEffect, useState } from "react";
// import Image from "next/image";
// import css from "./page.module.css";
// import Header from "../comp/Header";
// import UserCard from "../comp/UserCard";
// import LckResult from "../comp/LckResult";

// export default function Home() {
//   const [playerStats, setPlayerStats] = useState([]);

//   useEffect(() => {
//     // Make an HTTP request to the Riot Games API to fetch player statistics
//     // Replace 'YOUR_API_KEY' with your actual API key
//     const apiKey = process.env.NEXT_PUBLIC_RIOT_API_KEY;
//     const name = "free young thug";
//     fetch(
//       `https://jp1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${name}?api_key=${apiKey}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         // Update the playerStats state with the fetched data
//         setPlayerStats(data);
//       })
//       .catch((error) => {
//         console.error("Error fetching player statistics:", error);
//       });
//   }, []);

//   return (
//     <div className={`${css["comp"]}`}>
//       <Header />
//       <div>
//         <img className={`${css["img"]}`} src="/kind.png" alt="Summoner Icon" />
//       </div>
//       <div className={`${css["summoner"]}`}>
//         <div className={`${css["title"]}`}>
//           <p className={`${css["name"]}`}>SUMMONER</p>
//         </div>
//         <div className={`${css["card"]}`}>
//           <div className={`${css["cardWrap"]}`}>
//             {/* Render the UserCard components with playerStats */}
//             {playerStats.map((stats) => (
//               <UserCard name={stats.name} key={stats.id} />
//             ))}
//           </div>
//         </div>
//       </div>

//       <div className={`${css["mach"]}`}>
//         <div className={`${css["title"]}`}>
//           <p className={`${css["name"]}`}>T1 MACH RESULT</p>
//         </div>
//         <div className={`${css["result"]}`}>
//           <LckResult leftTeam="T1" rightTeam="Geng" stats="T1 WIN" />
//           <LckResult leftTeam="T1" rightTeam="Geng" stats="T1 WIN" />
//           <LckResult leftTeam="T1" rightTeam="Geng" stats="T1 WIN" />
//           <LckResult leftTeam="T1" rightTeam="Geng" stats="T1 WIN" />
//         </div>
//       </div>
//     </div>
//   );
// }
