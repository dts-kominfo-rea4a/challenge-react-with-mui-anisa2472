import "./App.css";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
import { useState } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Contact from "./components/Contact";
import { Box, Grid, Card } from "@mui/material";

const App = () => {
    // Masukkan Header dan lakukan map untuk Contact ke dalam div App
    // untuk membuat daftar kontak bisa menggunakan MUI list
    // https://mui.com/material-ui/react-list/#folder-list

    // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
    // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
    const [contacts, setContacts] = useState(contactsJSON);

    const formSubmitHandler = (contact) => {
        setContacts([...contacts, contact]);
    };

    return (
        <div className="App" sx={{ margin: 4 }}>
            <Box m={4} sx={{ flexGrow: 1 }}>
                <Header />
                <Grid container columns={16}>
                    <Grid item xs={8} p={4}>
                        <ContactForm propsSubmitHandler={formSubmitHandler} />
                    </Grid>
                    <Grid item xs={8} p={4}>
                        <Card>
                            {contacts.map((contact, i) => (
                                <Contact key={i} data={contact} />
                            ))}
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default App;
