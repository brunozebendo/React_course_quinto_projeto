/**Abaixo,o componente para novos usuários, ressalto que o htmlFor
 * é uma palavra reservada do JSX equivalente ao for do JS que 
 * O atributo htmlFor no JSX é o mesmo que o atributo for no HTML.
 * Ele é usado para vincular os rótulos aos seus respectivos campos de entrada
 * (usando o id do campo). Assim, ao clicar no rótulo(no nome) é o mesmo que clicar
 * no campo.
 * Isso é especialmente útil para caixas de seleção e botões de opção
*/


import React, {useState} from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("")
    const [enteredAge, setEnteredAge] = useState("")
    const [error, setError] = useState();



    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);

    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);

    }

    const errorHandler = () => {
        setError(null);
    }

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
         {
            setError ({
                title: 'Invalid input',
                message: 'Please enter a valid name and age(non-empty values).'
            })
            return;
        }
        if (+enteredAge < 1) 
         {
            setError ({
                title: 'Invalid age',
                message: 'Please enter a valid age(>0).'
            })
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername("");
        setEnteredAge("");
        
    }

    return (
        <div>
          {error && (
            <ErrorModal
              title={error.title}
              message={error.message}
              onConfirm={errorHandler}
            />
          )}
          <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
              <label htmlFor="username">Username</label>
              <input
                id="username"
                type="text"
                value={enteredUsername}
                onChange={usernameChangeHandler}
              />
              <label htmlFor="age">Age (Years)</label>
              <input
                id="age"
                type="number"
                value={enteredAge}
                onChange={ageChangeHandler}
              />
              <Button type="submit">Add User</Button>
            </form>
          </Card>
        </div>
      );
    };

export default AddUser;