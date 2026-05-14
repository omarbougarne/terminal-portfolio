export default function Command({ command, children }) {
  return (
    <div className="command">
      <h3>{command}{children}</h3>

    </div>
  )
}
