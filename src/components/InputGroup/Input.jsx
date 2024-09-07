export default function Input({ Label, onChange }) {
    return (
        <>
            <label htmlFor="">{Label}</label>
            <input type="text" onChange={(event) => {
                onChange(event)
            }} />
        </>
    )
}