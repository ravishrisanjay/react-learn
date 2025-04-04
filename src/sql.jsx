import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

function Sql(){
    return(
        <div>
            
            <NavLink to='/'><button >Home</button></NavLink>
        <Link to='/java'><button>Java</button></Link>
        <Link to='/sql'> <button>SQL</button></Link>
        <Link to='/react'> <button>React</button></Link>
          
            <h1>Java Questions</h1>
            <form>
                    <h1>choose the correct ans</h1>
                <br />
                <input type='radio'   name='check'></input>
                <label>option A</label>
                <br/>
                <input type='radio'   name='check'></input>
                <label>option B</label>
                <br/>
                <input type='radio' name='check'></input>
                <label>option C</label>
                <br />
                <label >choose the correct ans</label>
                <br />
                <input type='radio'   name='check'></input>
                <label>option A</label>
                <br/>
                <input type='radio'   name='check'></input>
                <label>option B</label>
                <br/>
                <input type='radio' name='check'></input>
                <label>option C</label>
                <br />
                <label >choose the correct ans</label>
                <br />
                <input type='radio'   name='check'></input>
                <label>option A</label>
                <br/>
                <input type='radio'   name='check'></input>
                <label>option B</label>
                <br/>
                <input type='radio' name='check'></input>
                <label>option C</label>
            </form>
        </div>
    )
}
export default Sql