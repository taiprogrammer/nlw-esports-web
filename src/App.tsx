
interface ButtonProps {
  title : String;
}

function Button(props: ButtonProps) {
  return <button>{props.title}</button>
}

function App() {

  return (
    <>
    <Button title="Send 1"/>
    <Button title="Send 2"/>
    </>
  )
}

export default App
