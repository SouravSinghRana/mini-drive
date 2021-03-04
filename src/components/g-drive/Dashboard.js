import React from 'react';
import NavbarComponent from './Navbar';
import { Container } from 'react-bootstrap';
import { useFolder } from '../../hooks/useFolder';
import AddFolderButton from './AddFolderButton';
import Folder from './Folder';

const Dashboard = () => {
const { folder, childFolders } = useFolder("ILrmnGS9l9YduUUz5d7a")
    // const  { folder , childFolders }  = useFolder("pKZ2R2JnqQ03cC56qCfo");
    console.log("childFolders" , childFolders)

    return (
        <>
            <NavbarComponent />
            <Container fluid>
                <AddFolderButton currentFolder={folder}/>
                {/* { folder && <Folder folder={folder} ></Folder> } */}
                    {childFolders.length > 0 && (
                        <div className="d-flex flex-wrap">
                            {childFolders.map(childFolder => (
                            <div
                                key={childFolder.id}
                                style={{ maxWidth: "250px" }}
                                className="p-2"
                            >
                                <Folder folder={childFolder} />
                            </div>
                            ))}
                        </div>
                    )}
            </Container>
        </>
    )
}

export default Dashboard;
