/**Primeiro criou as pastas de components e dentro dela a de UI e a de Users
 * e dentro de Users o componente AddUser que vai conter a lógica de novo usuário.
 * Portanto, sempre iniciar com a lógica de criar pastas para Assets e Components.
 * Depois criou o componente AddUser que vou aqui reproduzir pois acho 
 * que é a lógica mais básica possível. Ressaltando de sempre usar a tag
 * form para formulários e de sempre ter um onSubmit apontando para uma função
 * que vai acontecer quando o formulário for submetido
 */

import React from "react";

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
        
    }

    return (
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
            <label htmlFor="age">Age (Years)</label>
            <input id="age" type="number" />
            <button type="submit">Add User</button>
        </form>
    )
};

/*Então já se importa o componente no APP e o localiza dentro do return */
/**Foi criado então um <Card> dentro do APP para envolver o form, depois,
 * dentro do return do componente Card foi criada o código abaixo. 
 * A lógica é a seguinte o <Card> que envolve o form é um componente para
 * estilizar, podendo, inclusive, ser usado em outros componentes. No entanto,
 * por ser um componente criado e não natural do JS, ele não lida com props
 * nativamente, por isso, no componente AddUser foi criada a seguinte linha*/

<Card className={classes.input}></Card>

/*desta forma o className serve como props e ao mesmo tempo faz uma seleção
de estilo para aquele componente, no caso acima, ele aplica o estilo que
está no AddUser.module.css. Já dentro do return do componente Card essa
mesma className é passada e abriga tanto as classes do Card.module.css 
quanto do AddUser.module.css, ou seja, a lógica aqui é poder utilizar
CSS de mais de um módulo, um geral para o CARD e um mais específico
para o form em questão. Reparar na sintaxe com `` e $.
Já o props.children é a forma de acessar o componente filho.*/

const Card = (props) => {
    return <div>
        return <div className={`${classes.card} ${props.className}`}>{props.children}</div>
    </div>
};

/*Então, criou-se um componente padrão para o botão
classes.buton selecionar o CSS para o componente,
já o tipo do botão vai ser selecionado de maneira dinâmica, ou seja,
se houver um type definido (reset ou submit), será esse, se não, será do 
tipo button
O onClick também vai ser setado de maneira dinâmica, assim, dentro
do componente vai ser criada uma função para lidar com o evento do 
do onClick e ele vai retornar para cá. O props.children é para 
incorporar tudo o que estiver dentro do componente button.*/

const Button = (props) => {
    return <button className={classes.button}
    type={props.type || 'button'}
    onClick={props.onClick}>

    {props.children}

    </button>

    /**Depois de criado, o button foi importado para o componente AddUser
     * e lá nome foi mudado de button para Button, assim, passou a ser
     * o componente customizado
     */

/**Então, até o momento, o aplicativo está assim dividido, o componente
 * AddUser contém um form envelopado em um Card e, dentro desse form está
 * o componente Button. Já dentro do App está, por enquanto, só o componente
 * AddUser.
 */

/**Agora, a sintaxe padrão para guardar o que for inserido nos campos
 * de input. Primeiro o useState com o estado inicial entre parênteses,
 * depois uma função que vai mudar o estado de acordo com o valor
 * capturado na digitação do usuário e dentro da tag, no onChange,
 * o nome dessa função. */

const [enteredUsername, setEnteredUsername] = useState("")

const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
}

<input id="username" type="text" onChange={usernameChangeHandler}/>

/**Abaixo, a lógica para zerar os inputs quando o formulário for submetido.
 *Dentro da função addUserHandler, que é a função que é passada quando o formulário
 é submetido, é setado o estado para vazio de novo
 */


const addUserHandler = (event) => {
    event.preventDefault();
    setEnteredUsername("");
    setEnteredAge("");
    
}

/**No entanto, dentro da tag, também é necessário inserir um value com o valor inicial. Pelo que
 * entendi, isso faz com que o valor padrão seja o inicial, o zerado nesse caso.
 */

value={enteredUsername}
 /**Já o código abaixo que também fica dentro do AddUserHandler, ou seja, da função que é chamada
  * quando o formulário é validado, serve para validação se nada for preenchido ou se
  * a idade for menor que um. O + antes converte a string em um int.
   */

 if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
    return
}
if (+enteredAge < 1) {
    return;
}

/**Na aula 128 vai definir onde vai ficar o código para buscar (fetch) a 
 * lista de usuários e onde vai ficar outro para exibir. A princípio, a lista
 * poderia ser incluída dentro do componente AddUser, mas faz mais
 * sentido separar para que um componente cuide de obter os dados do usuário
 * e outro de exibir, assim, foi criado o Userslist com o código abaixo.
 * Ele foi envelopado dentro do Card para aplicar o CSS dele, mas também
 * foi aplicado um CSS próprio, depois o map vai iterar pelo user e
 * dentro de um <li> voltar os dados. (reparar na sintaxe das chaves e parenteses)
*/

const UsersList = (props) => {
    return (
        <Card className={classes.users}> 
    <ul>
        {props.user.map((user) =>(
        <li>
            {user.name} ({user.age} years old.)
        </li>
        ))}
    </ul>
    </Card>
    );
};

/**O proximo passo é situar o componente dentro do APP, novamente, ele poderia
 * ter sido incluído no AddUser, mas faz mais sentido inclui direto no App. Para
 * que o componente funcione é preciso passar esse users que vai ser o props
 * lá no UsersList
 */

<UsersList users={[]} />

/**Na aula 129 vai modificar o código para que quando o botão de addUser seja
 *pressionado também seja coletada a informação na UsersList, portanto,
 como são informações em dois componentes diferentes é preciso elevar o estado
 (lifting state up). Para isso o código vai para o App. Então foi importado
 o useState e depois é criado o código abaixo para guardar o estado 
 */

 const [UsersList, setUsersList] = useState ([])

 /**já a função abaixo vai ser a responsável por criar a lista
  * o (uName, uAge) vai ser o atributo para essa função, ou seja,
  * quando criar uma nova lista (um novo array) esse nome vai 
  * se relacionar com o campo do input no AddUder. Prestar atenção
  * na sintaxe do ...prevUsersList para copiar o array anterior.
  */

const addUserHandler = (uName, uAge) => {
  setUsersList ((prevUserslist) => {
    return [...prevUserslist, {name: uName, age: uAge, id: Math.random().toString()}];
  });
};

/**Dentro do return do App é passado assim para que o onAddUser seja passado
 * como um props no componente AddUser
  */

<AddUser onAddUser={addUserHandler} />

/**Já no componente AddUser é passado o props acima tendo como atributo
 * o estado inicial do input.
 */

props.onAddUser(enteredUsername, enteredAge);

/**Já no Userslist é passado o props para que seja criado o key único
 * de acordo com a função acima.
 */

<li key={user.id}></li>

/**Na aula 130 é implantado o módulo de erro, ou seja, um alert quando algo for
 * digitado errado, mas o principal aqui é o conceito da tela de erro que pode ser
 * reaproveitado em vários componentes.
 * O diferente aqui é a classe CSS blackdrop que escurece o fundo atrás
 * não sendo possível digitar nada, por isso ele está um <div> fora
 * do Card. O props.title e o props.message também são dinâmicos
 * para que cada componente crie sua própria mensagem e título.
 * Já o button está sendo reaproveitado de outro componente.
 */

const ErrorModal = (props) => {
    return(
        <div>
            <div className={classes.blackdrop} />
     <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>{props.title}</h2>
        </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
        <footer className={classes.action}>
        <Button>Okay</Button>
        </footer>         
        
    </Card>
    </div>
    );
};
/**Na aula 131 vai ser criada a lógica para mostrar a tela de erro efetivamente
 * quando for digitado algo errado.
 * Primeiro é criado um controle de estado, ainda dentro do componente AddUser
*/
const [error, setError] = useState();

/**Então, dentro da função addUserHandler que controla a inserção de novos
 * usuários é inserido o setError abaixo que vai ser adaptado para cada erro
 * possível
 */
if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0)
{
   setError ({
       title: 'Invalid input',
       message: 'Please enter a valid name and age(non-empty values).'
   })
   return;

/**Ainda dentro do AddUser é inserida a lógica abaixo para só mostrar 
 * a caixa de erro se ela for true, ou seja, se houver um erro.
 */
{error && (
    <ErrorModal
      title={error.title}
      message={error.message}
      onConfirm={errorHandler}
    />
  )}

/**Agora o código para apagar (dismiss) a caixa de erro, seja clicando no botão
 * okay ou no fundo. Seguindo o padrão, é criada uma função para setar 
 * o valor novamente para nulo
 */
const errorHandler = () => {
    setError(null);
}

/**Agora para disparar essa mensagem (triger), primeiro, na div 
 * que gera o fundo escuro é incluído um onClick
 */

<div className={classes.blackdrop} onClick={props.onConfirm}

/**também é incluído no button */

<Button onClick={props.onConfirm}>Okay</Button>

/**Então, por fim, dentro da div do ErrorModal é passada a linha abaixo 
 * que vai servir como um props apontando para a função.
 */

onConfirm={errorHandler}
