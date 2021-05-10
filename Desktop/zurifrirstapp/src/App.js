import logo from './img/logo.svg';
import mockup from './img/illustration-mockups.svg';
import './App.css';

function App() {
  return (
    <>
     <header>
       <img src={logo} alt="logo"/>
     </header>

     <main>
       <img src={mockup} alt="mobile-sektop"/>
       <div className="content">
         <h2>Build the community your fans will love </h2>
         <p>The goal is to develop youth leaders in tech who are ready to put their learned skills to work in leading organizations, communities, and their local countries while giving them access to resources, mentorship, and progress opportunities in the technology industry.</p>
         <button>Register</button>
       </div>
     </main>

     <footer>
     <i class="fab fa-facebook-f"></i>
     <i class="fab fa-twitter"></i>
     <i class="fab fa-instagram"></i>
     </footer>
    </>
  );
}

export default App;
