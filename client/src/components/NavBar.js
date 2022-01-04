import React from 'react'
import {Image, Container, Grid } from "semantic-ui-react";
import {Button} from "react-bootstrap"
import { useHistory } from "react-router-dom";
import mama from '../images/mama.gif'


function NavBar({user, setUser, onLogin}){
    const history = useHistory();


    const handleLogout = () => { 
        fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
          setUser(null);
          onLogin(null);
        }
        history.push("/logout")
      });
      }

    return(
        <Container text>
          <Grid divided='vertically'>
          <Grid.Row columns={2}>
       

            
            <Grid.Column width={14} textAlign='left'>
            <a href="/"><Button>Home</Button></a> {" "}
            <a href="/NewItem"><Button>New Item</Button></a>{" "}
            {/* <a href="/FoodLog"><Button>Food Log</Button></a>             */}
            <a href="/logout"><Button onClick={handleLogout}>Logout</Button></a>
            </Grid.Column>
            <Grid.Column width={2} textAlign='right'>
            <Image src={mama} avatar /> 
            </Grid.Column>
            </Grid.Row>
            </Grid>
        </Container>

    )
}

export default NavBar