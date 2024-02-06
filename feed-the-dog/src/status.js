export default function Status() {
  return (
    <>
      <p className="status">Status: {showStatus} </p>
    </>
  )
}

function showStatus(feedAmount) {
  if (feedAmount < 10) {
    return "Hungry"
  } else {
    return "Full"
  }
}