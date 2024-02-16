function Header(props){
    return(
        <>
        <h1 className="md:text-4xl font-bold text-xl">Hello {props.username}!</h1>
        <p className="md:text-2xl text-lg">I help you manage your activities :)</p>        
        </>
    )
}

export default Header