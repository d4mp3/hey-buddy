function Header() {
  return (
    <header className="overflow-hidden sticky top-0 z-50 grid grid-cols-3 shadow-md p-5">
        <div className="relative flex items-center h-10 cursor-pointer my-auto">
          <img className="h-56" src="src\assets\logo\long-logo.png" alt=""></img>
        </div>
        <div>middle</div>
        <div>right</div>
    </header>
  )
}

export default Header