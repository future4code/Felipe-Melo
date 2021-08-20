    import useForm from "./pages/useForms/useForms"
    



    function CreateTrips(){

        const {form, onChange, cleanFields} = useForm({
            nome:"",
            idade:"", 
            email:""})


        const cadastrar =(event) =>{
            event.preventDefault()
            console.log("enviado ")
        }
        
        
        
        return( 
            <div>
                    <h1>Cadastro</h1>
                    

        <form onSubmit={cadastrar}>
                <input 
                name={"nome"} 
                value={form.nome} 
                onChange= {onChange} 
                placeholder="Nome"/>


                <input 
                name={"idade"}
                value={form.idade}
                onChange= {onChange} 
                placeholder="Idade"/>


                <input
                name={"email"}
                value={form.email} 
                onChange= {onChange} 
                placeholder="E-mail"/>

                <button>Enviar</button>
        </form> 
        
        
        
            </div>


        )}


    export default CreateTrips 