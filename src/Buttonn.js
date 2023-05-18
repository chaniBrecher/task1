import {useNavigate} from 'react-router-dom';

const Buttonn=()=>{
    let navigate=useNavigate()
    
    return(<input type='button' value="להצגת התמונות" onClick={()=>{
        navigate('/gallery')
    }}/>)
}
export default Buttonn;