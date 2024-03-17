import { useState } from "react";
import { FormCard } from "..";

export default function Sgpa({ page }) {
    const [sgpa, setSgpa] = useState('');

    const InputLabelArr = [{ name: "Sgpa", value: sgpa, onChange: setSgpa }];

    return < FormCard arr={InputLabelArr} page={page} />
}