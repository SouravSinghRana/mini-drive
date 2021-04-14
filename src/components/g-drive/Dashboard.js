import React from 'react';
import NavbarComponent from './Navbar';
import { Container } from 'react-bootstrap';
import { useFolder } from '../../hooks/useFolder';
import { useParams, useLocation } from 'react-router-dom'; 
import AddFolderButton from './AddFolderButton';
import AddFileButton from './AddFileButton'
import Folder from './Folder';
import File from './File';
import FolderBreadcrumbs from './FolderBreadcrumbs';

const Dashboard = () => {

    const { folderId } = useParams();
    const { state = { }} = useLocation();
    const { folder, childFolders , childFiles } = useFolder(folderId, state.folder)
    // const  { folder , childFolders }  = useFolder("pKZ2R2JnqQ03cC56qCfo" / "ILrmnGS9l9YduUUz5d7a");
    // console.log("childFiles" , childFiles)

    return (
        <>
            <NavbarComponent />
            <Container fluid>
                <div className="d-flex align-items-center">
                    <FolderBreadcrumbs currentFolder={folder} />
                    <AddFileButton currentFolder={folder}/>
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
                    {childFolders.length > 0 && childFiles.length > 0 && <hr />}
                    {childFiles.length > 0 && (
                        <div className="d-flex flex-wrap">
                            {childFiles.map(childFile => (
                            <div
                                key={childFile.id}
                                style={{ maxWidth: "250px" }}
                                className="p-2"
                            >
                                <File file={childFile} />
                            </div>
                            ))}
                        </div>
                    )}
            </Container>
        </>
    )
}

export default Dashboard;
