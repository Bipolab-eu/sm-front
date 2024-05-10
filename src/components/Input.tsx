interface Props {
  label: string,
  type: string,
  name: string,
  value: number,
}

export default function Input({ label, type, name, value }:Props) {
  return (
    <label>
      <input type={type} name={name} value={value} />
      { label }
    </label>
  )
}
