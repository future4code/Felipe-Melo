import React, { useEffect, useState } from "react"
import { HomeContainer, Profile, ProfileImage } from "./styled"
/* import styled from "./styled" */
import axios from "axios"


 export function Home(props) {
    const [perfil, setPerfil] = useState({})
    const [escolha, setEscolha] = useState(1)
    useEffect(() => {
        pegaPerfil()
    }, [escolha]);
    const pegaPerfil = () => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheussantos-lovelace/person`
        axios.get(url)
            .then((res) => {
                setPerfil(res.data.profile)
                console.log(res.data.profile)
                console.log('perfil', perfil)
            })
            .catch((err) => { console.log(err) })
    }
    const selecionaPerfil = (choice) => {
        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/matheussantos-lovelace/choose-person`
        const body = {
            id: perfil.id,
            choice: choice
        }
        axios.post(url, body)
            .then((res) => { console.log(res) })
            .catch((err) => { console.log(err) })
    }
    return <div>
        <div>
            <h2>astromatch</h2>
            <button onClick={() =>props.trocarTela("Tela")}>
                LISTA   
            </button> 
        </div>
        <profile>
            <img src={perfil.photo} />
            {perfil.name}
            {perfil.age}
            <p> {perfil.bio}</p>
        </profile>
        <button
            onClick={() => {
                setEscolha(escolha + 1)
                selecionaPerfil(true)
            }}
        >sim
        </button>
        <button
            onClick={
                () => {
                    setEscolha(escolha + 1)
                    selecionaPerfil(false)
                }}
        >to fora
        </button>
    </div>
}
export default Home 













