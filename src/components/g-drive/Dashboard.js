import React from 'react';
import NavbarComponent from './Navbar';
import { Container } from 'react-bootstrap';
import { useFolder } from '../../hooks/useFolder';
import { useParams, useLocation } from 'react-router-dom'; 
import AddFolderButton from './AddFolderButton';
import Folder from './Folder';
import FolderBreadcrumbs from './FolderBreadcrumbs';

const Dashboard = () => {

    const { folderId } = useParams();
    const { state = { }} = useLocation();
    const { folder, childFolders } = useFolder(folderId)
    // const  { folder , childFolders }  = useFolder("pKZ2R2JnqQ03cC56qCfo" / "ILrmnGS9l9YduUUz5d7a");
    console.log("childFolders" , childFolders)

    return (
        <>
            <NavbarComponent />
            <Container fluid>
                <div className="d-flex align-items-center">
                    <FolderBreadcrumbs currentFolder={folder} />
                    <AddFolderButton currentFolder={folder}/>
                </div>
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
