import 'App.js./' 
import React from 'react'






class PlayListManagerPage extends React.Component{
    state= {
        currentPage:"playlists"
    }
}

changePage =() =>{

}

render(){
    const renderCurrentPage =()=>{
        if(this.state.currentPAge ==="playlists"){
            return<PlayLists/>
        }else if(this.state.currentPage === "PlayListDetail"){
            return <PlayList/>
        }
    }
    return(
      <PlayListContainer>
          {renderCurrentPage()}
      </PlayListContainer>
      )


}

export default PlaylistManagerPage