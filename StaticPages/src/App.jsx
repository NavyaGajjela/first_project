import logo from './assets/react_logo.png';



 function  Header(){
 return(
    <header className="header">
    <img src = {logo} className="logo" alt="React logo"/>
        <nav>
            <ul className="nav-items">  
                <li className="nav-list-items">Pricing</li>
                <li className="nav-list-items">About</li>
                <li className="nav-list-items">Contact</li>
            </ul>
        </nav>
     </header>
 );

}
//App.jsx
function App(){
    return(
    <>

    <Header />
    <main>
    <h1> Reason i am excited to learn React</h1>
    <ol>
        <li>React is popular library , so it help me to good start with career</li>
        <li>Having a skill with react help in get jobs in frontend role</li>
    </ol>
    </main>

        <footer>
            <small>Navya.All rights are reserved</small>
        </footer>
        

    </>
    );
}
export default App;

