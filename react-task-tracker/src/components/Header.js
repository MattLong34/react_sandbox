import Button from "./Button"

const Header = ({title}) => {
    const onClick = () => {
        console.log('clicked')
    } 

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Hello' onClick={onClick}/>
    </header>
  )
}

// CSS in JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'gray'
// }

export default Header
