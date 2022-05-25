import { useState, useEffect } from 'react'
import { Grid } from "semantic-ui-react";
import Header from "../../components/Header/Header";
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import ProfilePostDisplay from "../../components/ProfilePostDisplay/ProfilePostDisplay";
import userService from "../../utils/userService";
import { useParams } from 'react-router-dom'


export default function ProfilePage() {

  const [posts, setPosts] = useState([])
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  // grab the param from the browser
  // we defined username in the app.js /:username
  const { username } = useParams()

  console.log(username, ' <----- this username')
  async function getProfile(){

	 try {
		 const data = await userService.getProfile(username)
		 console.log(data, " <- data")


		 setLoading(() => false)
		 setPosts(() => data.posts)
		 setUser(() => data.user)

	 } catch(err){
		 console.log(err);
		 setLoading(() => false)
		 setError('Profile Does not exist!')
	 }

  }

  // this gets called when the component
  // mounted to the dom

  useEffect(() => {
	getProfile()
  }, [])

  if(loading){
	  return (
		  <>
		    <Header/>
			<h1>Loading....</h1>
		  </>
	  )
  }

  if(error){
	  return (
		  <>
			<Header />
			<h1>{error}</h1>
		  </>
	  )
  }

  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Header />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <ProfileBio user={user}/>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column style={{ maxWidth: 750 }}>
          <ProfilePostDisplay />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
