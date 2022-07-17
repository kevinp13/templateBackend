import {
    getFirestore,
    getDocs,
    collection,
    doc,
    getDoc,
} from 'firebase/firestore';
import { app } from '../../../config/config';
import { NotFoundError } from '../../../domain/errors/not-found';

const db = getFirestore(app);

export const getAllDocumentsCollection = async <T>(
    collectionName: string
): Promise<T[]> => {
    const data: T[] = [];
    const querySnapshot = await getDocs(collection(db, collectionName));
    querySnapshot.forEach((doc) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data.push(doc.data() as any);
    });
    return data;
};

export const getDocument = async <T>(
    collectionName: string,
    id: string
): Promise<T> => {
    const ref = doc(db, collectionName, id);
    const docSnap = await getDoc(ref);
    if (docSnap.exists()) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return docSnap.data() as any;
    } else {
        throw new NotFoundError(`No hay Documentos con el id: ${id}`);
    }
};
