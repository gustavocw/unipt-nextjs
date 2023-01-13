import { firestore } from "@/lib/firebase";
import { getDocs, query } from "firebase/firestore";

const AlunosCollection = collection(firestore, "Alunos");

export default async function handler(req, res) {
  if (req.method !== "GET")
    res.status(400).json({ error: { message: "Only GET allowed" } });

  try {
    const Alunos = await getAllAlunos();
    res.status(200).json(JSON.stringify(Alunos));
  } catch ({ code, message }) {
    res.status(400).json({ status: false, error: { code, message } });
  }
}

async function getAllAlunos() {
  const q = query(AlunosCollection);
  return new Promise((resolve, reject) => {
    getDocs(q)
      .then(async (docs) => {
        const AlunosArr = [];
        docs.forEach((doc) => AlunosArr.push({ id: doc.id, ...doc.data() }));
        resolve(AlunosArr);
      })
      .catch(reject);
  });
}
