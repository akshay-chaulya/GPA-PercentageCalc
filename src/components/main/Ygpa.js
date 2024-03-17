import { useState } from "react";
import { FormCard } from ".."
export default function Ygpa({ page }) {
    const [odd, setOdd] = useState('');
    const [even, setEven] = useState('');

    const arr = [
        { name: "Odd Sem Sgpa", value: odd, onChange: setOdd },
        { name: "Even Sem Sgpa", value: even, onChange: setEven },
    ]

    return <FormCard arr={arr} page={page} />
}