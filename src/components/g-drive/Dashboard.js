import React from 'react';
import NavbarComponent from './Navbar';
import { Container } from 'react-bootstrap';
import AddFolderButton from './AddFolderButton';

const Dashboard = () => {
    return (
        <>
            <NavbarComponent />
            <Container fluid>
                <AddFolderButton />
            </Container>
        </>
    )
}

export default Dashboard;
