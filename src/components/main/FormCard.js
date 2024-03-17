import { useState } from "react";
import { closeIcon } from "../../assets/icons";
import { Button, InputLabel } from ".."

export default function FormCard({ arr, page }) {
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        let dgpa = 0;
        let isValue = true;

        arr.forEach(item => {
            if (!item.value || item.value > 10 || item.value <= 0) {
                isValue = false;
            }
            dgpa += item.value;
        });
        if (!isValue) {
            alert("pleas enter a valid SGPA");
            return;
        }
        dgpa = dgpa / arr.length;
        const percentage = ((dgpa - 0.75) * 10).toFixed(1);
        setMessage(`Your ${page.toUpperCase()} percentage is ${percentage}%`);
        arr.forEach(item => item.onChange(''));
    }

    return (
        <>
            {message &&
                <div className={`w-full relative flex items-center justify-center py-14 text-3xl shadow-lg ring-[0.5px] ring-gray-100 rounded-md`}>
                    <img onClick={() => setMessage('')} className="absolute right-4 top-4 h-8 w-8 cursor-pointer" src={closeIcon} alt="Close" />
                    {message}
                </div>
            }

            <form onSubmit={handleSubmit} className={`gpa-card ${arr.length > 4 ? "dgpa-card" : ""}`}>
                <h1>Clculate your DGPA percentage</h1>
                <hr />
                {arr.map(item =>
                    <InputLabel
                    key={item.name}
                        name={item.name}
                        value={item.value}
                        onChange={item.onChange}
                    />
                )}
                <Button>Submit</Button>
            </form>
        </>
    );
}