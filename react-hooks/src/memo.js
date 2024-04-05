// React.memo
const { memo } = require("react")

const MemoSon = memo(function Son() {
  return <div>this is Son</div>
})

function App() {
  return (
    <div className="App"> 
      this is App
      <MemoSon></MemoSon>
    </div>
    
  )
}

export default App;