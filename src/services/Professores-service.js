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

// const ProfessoresCollection = collection(firestore, "Professores");

// function ProfessoresSubscribe({ setProfessores, filters = [] }) {
//   const qFilters = [ProfessoresCollection];
//   filters.forEach((item) =>
//     qFilters.push(where(item.field, item.operator, item.value))
//   );
//   const q = query(...qFilters);
//   const unsubscribe = onSnapshot(q, (snapshot) => {
//     const Professores = [];
//     snapshot.forEach((doc) => {
//       Professores.push({ id: doc.id, ...doc.data() });
//     });
//     setProfessores(Professores);
//     return () => {
//       unsubscribe();
//     };
//   });
// }

// async function upsertProfessor(Professor) {
//   return new Promise((resolve, reject) => {
//     if (Professor.id) {
//       console.log("updating..");
//       const docRef = doc(firestore, "Professores", Professor.id);
//       delete Professor["id"];
//       updateDoc(docRef, Professor).then(resolve).catch(reject);
//     } else addDoc(ProfessoresCollection, Professor).then(resolve).catch(reject);
//   });
// }

// async function deleteProfessor(ProfessorId) {
//   const docRef = doc(firestore, "Professores", ProfessorId);

//   return deleteDoc(docRef)
//     .then((e) => {
//       return e;
//     })
//     .catch((e) => {
//       return e;
//     });
// }

// async function getAllProfessores() {
//   const q = query(ProfessoresCollection);
//   const ProfessoresArr = [];
//   return getDocs(q)
//     .then(async (docs) => {
//       docs.forEach((doc) => ProfessoresArr.push({ id: doc.id, ...doc.data() }));
//       return ProfessoresArr;
//     })
//     .catch((e) => {
//       // console.log(e);
//       return e;
//     });
// }

// async function getProfessorByDescription(description) {
//   const q = query(ProfessoresCollection, where("description", "==", description));
//   const Professores = [];
//   return getDocs(q)
//     .then((docs) => {
//       docs.forEach((doc) => Professores.push({ id: doc.id, ...doc.data() }));
//       return Professores[0] || null;
//     })
//     .catch((e) => {
//       // console.log(e);
//       return e;
//     });
// }

// export {
//   upsertProfessor,
//   deleteProfessor,
//   ProfessoresSubscribe,
//   getAllProfessores,
//   getProfessorByDescription,
// };
