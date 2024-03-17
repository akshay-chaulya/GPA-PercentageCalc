import { useState } from "react";
import { FormCard } from "..";

export default function Dgpa({ page }) {
    const [first, setFirst] = useState('');
    const [second, setSecond] = useState('');
    const [third, setThird] = useState('');
    const [fourth, setFourth] = useState('');
    const [fifth, setFifth] = useState('');
    const [sixth, setSixth] = useState('');
    const [seventh, setSeventh] = useState('');
    const [eight, setEight] = useState('');

    const inputLabelArr = [
        {
            name: "First Sem sgpa",
            value: first,
            onChange: setFirst
        },
        {
            name: "Second Sem sgpa",
            value: second,
            onChange: setSecond
        },
        {
            name: "Third Sem sgpa",
            value: third,
            onChange: setThird
        },
        {
            name: "Fourth Sem sgpa",
            value: fourth,
            onChange: setFourth
        },
        {
            name: "Fifth Sem sgpa",
            value: fifth,
            onChange: setFifth
        },
        {
            name: "Sixth Sem sgpa",
            value: sixth,
            onChange: setSixth
        },
        {
            name: "Seventh Sem sgpa",
            value: seventh,
            onChange: setSeventh
        },
        {
            name: "Eight Sem sgpa",
            value: eight,
            onChange: setEight,
        },

    ];

    return <FormCard arr={inputLabelArr} page={page} />
}
