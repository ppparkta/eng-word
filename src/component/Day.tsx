import Word, { IWord } from './Word.tsx';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch.ts';
import React from 'react';


export default function Day() {
    const { day } = useParams<{ day: string }>();
    //const [words, setWords] = useState([]);

    const words: IWord[] = useFetch(`http://localhost:3001/words?day=${day}`);
    //useEffect(() => {
    //    fetch(`http://localhost:3001/words?day=${day}`)
    //        .then(res => { return res.json() })
    //        .then(data => setWords(data));
    //}, [day]);

    //const words = dummy.words.filter(word => (word.day === Number(day)));

    return (
        <React.Fragment>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>Loading...</span>}
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
        </React.Fragment>
    );
}