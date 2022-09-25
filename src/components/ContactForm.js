// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import React, { useState } from "react";
import { Box, Grid, Card, CardContent, TextField, Button } from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const ContactForm = (props) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada
    const [newContact, setNewContact] = useState({
        name: "",
        phone: "",
        email: "",
        photo: "",
    });

    const inputOnChangeHandler = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value });
    };

    const localSubmitHandler = (e) => {
        e.preventDefault();
        props.propsSubmitHandler(newContact);
        setNewContact({ name: "", phone: "", email: "", photo: "" });
    };

    return (
        <>
            <Card>
                <CardContent>
                    <form action="" onSubmit={localSubmitHandler}>
                        <Box sx={{ width: "100%" }}>
                            <Grid p={2}>
                                <TextField
                                    required
                                    id="outline-basic"
                                    label="Name"
                                    variant="standard"
                                    name="name"
                                    value={newContact.name}
                                    onChange={inputOnChangeHandler}
                                    fullWidth
                                ></TextField>
                            </Grid>
                            <Grid p={2}>
                                <TextField
                                    required
                                    id="outline-number"
                                    label="Phone"
                                    variant="standard"
                                    name="phone"
                                    value={newContact.phone}
                                    onChange={inputOnChangeHandler}
                                    fullWidth
                                ></TextField>
                            </Grid>
                            <Grid p={2}>
                                <TextField
                                    required
                                    id="outline-basic"
                                    label="E-mail"
                                    variant="standard"
                                    name="email"
                                    value={newContact.email}
                                    onChange={inputOnChangeHandler}
                                    fullWidth
                                ></TextField>
                            </Grid>
                            <Grid p={2}>
                                <TextField
                                    required
                                    id="outline-basic"
                                    label="Photo URL"
                                    variant="standard"
                                    name="photo"
                                    value={newContact.photo}
                                    onChange={inputOnChangeHandler}
                                    fullWidth
                                ></TextField>
                            </Grid>
                            <Grid p={2}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    startIcon={<PersonAddIcon />}
                                >
                                    Add Contact
                                </Button>
                            </Grid>
                        </Box>
                    </form>
                </CardContent>
            </Card>
        </>
    );
};

export default ContactForm;
