import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <pagina>
       <head>
      
      <script src="https://kit.fontawesome.com/0a6846680d.js" crossorigin="anonymous"></script>
    </head>
    <body>
<footer class="foot">
<div className='main-footer'>
<h1 class="Titulo"> CONTACT US</h1>
<div className='home'>
<FontAwesomeIcon className='homeI' icon={faHome} />
<h2>Cochabamba</h2>
</div>

<div className="phone">
<FontAwesomeIcon className='PhoneI'icon={faPhone} />   
<h2>722224537</h2>
</div>


<div className="email">
<FontAwesomeIcon className='EmailI' icon={faPencilAlt} />     
<h2>aplicacion@empleosya.com.bo</h2>
</div>
</div>
</footer>

    </body>


      
    </pagina>
  );
}

export default App;
