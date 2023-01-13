// import { firestore } from "@/lib/firebase";
// import {
//   collection,
//   query,
//   addDoc,
//   onSnapshot,
//   deleteDoc,
//   doc,
//   updateDoc,
//   getDocs,
//   where,
// } from "firebase/firestore";

// const AlunosCollection = collection(firestore, "Alunos");

// function AlunosSubscribe({ setAlunos, filters = [] }) {
//   const qFilters = [AlunosCollection];
//   filters.forEach((item) =>
//     qFilters.push(where(item.field, item.operator, item.value))
//   );
//   const q = query(...qFilters);
//   const unsubscribe = onSnapshot(q, (snapshot) => {
//     const Alunos = [];
//     snapshot.forEach((doc) => {
//       Alunos.push({ id: doc.id, ...doc.data() });
//     });
//     setAlunos(Alunos);
//     return () => {
//       unsubscribe();
//     };
//   });
// }

// async function upsertAluno(Aluno) {
//   return new Promise((resolve, reject) => {
//     if (Aluno.id) {
//       console.log("updating..");
//       const docRef = doc(firestore, "Alunos", Aluno.id);
//       delete Aluno["id"];
//       updateDoc(docRef, Aluno).then(resolve).catch(reject);
//     } else addDoc(AlunosCollection, Aluno).then(resolve).catch(reject);
//   });
// }

// async function deleteAluno(AlunoId) {
//   const docRef = doc(firestore, "Alunos", AlunoId);

//   return deleteDoc(docRef)
//     .then((e) => {
//       return e;
//     })
//     .catch((e) => {
//       return e;
//     });
// }

// async function getAllAlunos() {
//   const q = query(AlunosCollection);
//   const AlunosArr = [];
//   return getDocs(q)
//     .then(async (docs) => {
//       docs.forEach((doc) => AlunosArr.push({ id: doc.id, ...doc.data() }));
//       return AlunosArr;
//     })
//     .catch((e) => {
//       // console.log(e);
//       return e;
//     });
// }

// async function getAlunoByDescription(description) {
//   const q = query(AlunosCollection, where("description", "==", description));
//   const Alunos = [];
//   return getDocs(q)
//     .then((docs) => {
//       docs.forEach((doc) => Alunos.push({ id: doc.id, ...doc.data() }));
//       return Alunos[0] || null;
//     })
//     .catch((e) => {
//       // console.log(e);
//       return e;
//     });
// }

// export {
//   upsertAluno,
//   deleteAluno,
//   AlunosSubscribe,
//   getAllAlunos,
//   getAlunoByDescription,
// };
