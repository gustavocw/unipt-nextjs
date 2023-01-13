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

// const CursosCollection = collection(firestore, "Cursos");

// function CursosSubscribe({ setCursos, filters = [] }) {
//   const qFilters = [CursosCollection];
//   filters.forEach((item) =>
//     qFilters.push(where(item.field, item.operator, item.value))
//   );
//   const q = query(...qFilters);
//   const unsubscribe = onSnapshot(q, (snapshot) => {
//     const Cursos = [];
//     snapshot.forEach((doc) => {
//       Cursos.push({ id: doc.id, ...doc.data() });
//     });
//     setCursos(Cursos);
//     return () => {
//       unsubscribe();
//     };
//   });
// }

// async function upsertCurso(Curso) {
//   return new Promise((resolve, reject) => {
//     if (Curso.id) {
//       console.log("updating..");
//       const docRef = doc(firestore, "Cursos", Curso.id);
//       delete Curso["id"];
//       updateDoc(docRef, Curso).then(resolve).catch(reject);
//     } else addDoc(CursosCollection, Curso).then(resolve).catch(reject);
//   });
// }

// async function deleteCurso(CursoId) {
//   const docRef = doc(firestore, "Cursos", CursoId);

//   return deleteDoc(docRef)
//     .then((e) => {
//       return e;
//     })
//     .catch((e) => {
//       return e;
//     });
// }

// async function getAllCursos() {
//   const q = query(CursosCollection);
//   const CursosArr = [];
//   return getDocs(q)
//     .then(async (docs) => {
//       docs.forEach((doc) => CursosArr.push({ id: doc.id, ...doc.data() }));
//       return CursosArr;
//     })
//     .catch((e) => {
//       // console.log(e);
//       return e;
//     });
// }

// async function getCursoByDescription(description) {
//   const q = query(CursosCollection, where("description", "==", description));
//   const Cursos = [];
//   return getDocs(q)
//     .then((docs) => {
//       docs.forEach((doc) => Cursos.push({ id: doc.id, ...doc.data() }));
//       return Cursos[0] || null;
//     })
//     .catch((e) => {
//       // console.log(e);
//       return e;
//     });
// }

// export {
//   upsertCurso,
//   deleteCurso,
//   CursosSubscribe,
//   getAllCursos,
//   getCursoByDescription,
// };
