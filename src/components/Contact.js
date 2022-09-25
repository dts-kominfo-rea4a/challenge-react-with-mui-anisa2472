// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import {
    ListItem,
    ListItemAvatar,
    Avatar,
    Typography,
    Divider,
    ListItemText,
} from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
    // Contact berisi foto, nama, telepon, dan email
    return (
        <>
            <ListItem>
                <ListItemAvatar>
                    <Avatar
                        alt="photo"
                        src={data.photo}
                        sx={{ width: 64, height: 64 }}
                    ></Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Typography sx={{ fontWeight: 500 }}>
                            {data.name}
                        </Typography>
                    }
                    secondary={
                        <>
                            <Typography>{data.phone}</Typography>
                            <Typography>{data.email}</Typography>
                        </>
                    }
                    sx={{ ml: 4 }}
                ></ListItemText>
            </ListItem>
            <Divider sx={{ mr: 2, ml: 2 }}></Divider>
        </>
    );
};

export default Contact;
