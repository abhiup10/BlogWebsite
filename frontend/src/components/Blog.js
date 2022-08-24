import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react';
import ModeEditOutlineIcon from '@mui/icons-material/Edit';
import DeletForeverIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Blog = ({title , description, imageURL,userName, isUser, id}) => {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/myBlogs/${id}`);
  };

  const deleteRequest = async () => {
    const res = await axios.delete(`http://localhost:5000/api/blog/${id}`).catch(err => console.log(err));
    const data = await res.data;
    return data;
  }
  const handleDelete = () => {
    deleteRequest().then(() =>navigate("/")).then(() =>navigate("/blogs"));
  }

  return ( 
    <div>
         <Card sx={{ width:"40%",
                     margin:'auto', 
                     mt:4,
                     bgcolor:'#FCF8E8',
                     padding: 3,
                     boxShadow:"5px 5px 10px #CCC",
                    ":hover":{ boxShadow: "10px 10px 2px #E9DAC1 "}
                     }}
                     >
      {isUser && (
        <Box display="flex">
          <IconButton onClick={handleEdit} sx={{marginLeft:'auto'}}><ModeEditOutlineIcon color='warning'/></IconButton>
          <IconButton  onClick={handleDelete}><DeletForeverIcon color='error'/></IconButton>
        </Box>
      )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
         {userName ? userName.charAt(0): ""}
          </Avatar>
        }
        
        title={title}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageURL}
        alt="Paella dish"
      />
      
      <CardContent>
      <hr/>
      <br/>
        <Typography variant="body2" color="text.secondary">
        <b>{userName}</b> {":"} {description}
        </Typography>
      </CardContent>

    </Card>
    </div>
  )
}

export default Blog