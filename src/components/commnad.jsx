function Command({ command, children }) {
  return (
    <div className="command">
      <h3>{command}</h3>
      {children}
    </div>
  )
}
