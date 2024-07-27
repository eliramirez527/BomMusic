import '../Layout/Layout.css'


const Layout = ({ children }) => {
    return (
      <div className='contenedor'>
        {children}
      </div>
    )
  }
  
  export default Layout