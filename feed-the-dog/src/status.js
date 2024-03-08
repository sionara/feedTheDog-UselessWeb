export const Status = ({feedCounter}) => {
  
  function showStatus() {
    if (feedCounter < 5) {
      return "Hungry"
    } else {
      
      return "Full"
    }
  }  
  
  return (
    <>
      <p className="status">Status: {showStatus()} </p>
    </>
  )
}

