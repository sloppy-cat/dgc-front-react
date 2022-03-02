import React, { FC, useEffect, useState } from 'react'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, Zoom } from '@mui/material';
import { blue } from '@mui/material/colors';
import { User } from '../../@lib/type';
import { padding } from '@mui/system';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Swal from 'sweetalert2';
import { confirmAlert } from 'react-confirm-alert'; // Import

interface UserDetailProps {
  user: User;
}

const UserDetail: FC<UserDetailProps> = ({user}) => {

  const [isClickProfileImage, setIsClickProfileImage] = useState(false)
  const handleClickProfileImage = () => {
    setIsClickProfileImage(!isClickProfileImage)
  }
  useEffect(() => {}, [isClickProfileImage])
  return (
    <Card sx={{marginBottom: "20px"}}>
      <CardHeader
        avatar={
          <>
            <CardMedia
              component="img"
              image={`https://avatars.githubusercontent.com/u/${user.id}?v=4`}
              alt="profile"
              sx={isClickProfileImage?
                {
                  height: '50px',
                  width: '50px',
                  borderRadius: 1,
                  transform: 'scale(4, 4) translate(40%, 15px)',
                  transitionProperty: 'all',
                  transitionDuration: '1s',
                  zIndex: 1,
                }:{
                  height: '50px',
                  width: '50px',
                  borderRadius: 50,
                  transform: 'scale(4, 4), translate(50px, 50px)',
                  transitionProperty: 'all',
                  transitionDuration: '1s',
                }
              }
              onClick={handleClickProfileImage}
            />
            <div style={isClickProfileImage?
                {
                  marginLeft: '10px',
                  transform: 'translate(165px,0px)',
                  transitionDuration: '1s',
                }:{
                  marginLeft: '10px',
                  transform: 'translate(0px,0px)',
                  transitionDuration: '1s',
                }
              }>
              <Typography>
                {`${user.login}   ${user.name?'/ '+ user.name:''}`}
              </Typography>
              <Typography color='gray' >
                {new Date(user.created_at).toLocaleDateString()}
              </Typography>
            </div>
          </>

        }
        action={
          <>
            <IconButton aria-label="star" onClick={()=>window.open(user.html_url+'?tab=stars')}>
              <StarBorderIcon />
            </IconButton>
            <IconButton aria-label="following" onClick={()=>window.open(user.html_url+'?tab=followers')}>
              <PeopleAltIcon />
            </IconButton>
          </>
        }
        // title={`${user.login}   ${user.name?'/ '+ user.name:''}`}
        // subheader={new Date(user.created_at).toLocaleDateString()}
      />
      <CardContent sx={isClickProfileImage
        ?{
          alignItems: 'center',
          transform: 'translate(220px,0px)',
          transitionDuration: '1s',
        }:{
          alignItems: 'center',
          transform: 'translate(0px,0px)',
          transitionDuration: '1s',
      }}>
        <IconButton aria-label="add to favorites" size='small' disabled >
          {/* <FavoriteIcon /> */}
          <EmailIcon fontSize='small'/> : {user.email?user.email:'x'}
        </IconButton>
        <br />
        <IconButton aria-label="share" size='small' disabled >
          <LocationOnIcon fontSize='small'/> : {user.location?user.location:'x'}
        </IconButton>
        <br />
        <IconButton aria-label="share" size='small' disabled >
          <ApartmentIcon fontSize='small'/> : {user.company?user.company:'x'}
        </IconButton>
      </CardContent>
      <CardMedia
        sx={{width:'95%', padding: '10px'}}
        component="img"
        image={`https://ghchart.rshah.org/${user.login}`}
        alt="commit"
      />
    </Card>
  )
}

export default UserDetail