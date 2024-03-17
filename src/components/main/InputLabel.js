
export default function InputLabel({ name, value, onChange }) {
    return (
        <>
            <label>{name.toUpperCase()}</label>
            <input
                value={value}
                onChange={e => onChange(Number(e.target.value) ? Number(e.target.value) : "")}
                type="text"
                placeholder={`Enter your ${name.toLowerCase()}`}
            />
        </>
    );
}