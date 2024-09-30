 
import styles from "./App.module.css";
import { Post, PostType } from "./components/Post";
import { Sidebar } from "./components/Sidebar";


import "./global.css";



const posts:PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "João Ponce",
      role: "Dev front end",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/MatheusLukas.png",
      name: "Matheus",
      role: "Cto @nexusbase",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "link", content: "👉 jane.design/doctorcare" },
    ],
    publishedAt: new Date("2024-09-29 20:00:00"),
  },
];
export function App() {
  return (
    <>
      <div>
        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            {posts.map((post) => {
              return (
                <Post
                  key={post.id}
                  post={post}
                />
              );
            })}
          </main>
        </div>
      </div>
    </>
  );
}
