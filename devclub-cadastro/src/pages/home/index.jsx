import './style.css'
import { useEffect, useState, useRef } from 'react'
import Trash from '../../assets/trash.svg'
import api from '../../services/api'

function Home() {
  const [users, setUsers] = useState([])
  const [formSubmitMessage, setFormSubmitMessage] = useState("")
  const inputNome = useRef()
  const inputIdade = useRef()
  const inputEmail = useRef()

  async function getUsers (){
    let res = await api.get('usuarios');
    setUsers(res.data);
  }


  useEffect(() => {
    getUsers();
  }, [])


  async function submitHandler () {
    const data = {
      nome: inputNome.current.value,
      idade: parseInt(inputIdade.current.value),
      email: inputEmail.current.value
    }

    try {
      const res = await api.post('usuarios', data);
      if (res.status === 201) {
        setFormSubmitMessage("Usuário cirado com sucesso!");
        setUsers([...users, res.data]);
      }
      else {
        setFormSubmitMessage("Falha ao criar usuario!");
      }

    } catch (error) {
      console.log(error);
      setFormSubmitMessage("Falha ao criar usuario!");
    }
    
  };


  async function deleteUser(id) {
    await api.delete(`usuarios/${id}`)
    setUsers(users.filter(user => user.id !== id))
  }


  return (
    <div className='container'>
      <form action={submitHandler}>
        <h1>Cadastro de Usuário</h1>
        <input placeholder='Nome' name='nome' type="text" ref={inputNome}/>
        <input placeholder='Idade' name='idade' type="number" ref={inputIdade}/>
        <input placeholder='E-mail' name='email' type="email" ref={inputEmail}/>
        <button type='button' onClick={submitHandler}>Cadastrar</button>
        <span>{formSubmitMessage}</span>
      </form>

    {users.map( user => (
      <div className='card' key={user.id}>
        <div>
          <p>Nome: <span>{user.nome}</span></p>
          <p>Idade: <span>{user.idade}</span></p>
          <p>Email: <span>{user.email}</span></p>
        </div>
        <button onClick={() => deleteUser(user.id)}>
          <img className='icon' src={Trash}/>
        </button>
      </div>
    ))}
      
    </div>
  )
}

export default Home
