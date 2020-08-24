import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { map } from "lodash";
import { useSelector } from "react-redux";
import { useFirebase, useFirebaseConnect } from "react-redux-firebase";
import Dropzone from "react-dropzone";
const fileMetadata = { contentType: "image/jpeg" };
// Path within Database for metadata (also used for file Storage path)
const filesPath = "uploadedFiles";
const storagePath = "workplace";
const dbPath = "artisan";
export default function Uploader({ uploadedFiles, onFileDelete, firebase, firestore, artisan }) {
  //   const firebase = useFirebase()
  const [imgURLs, seturls] = useState([]);
  useEffect(() => {
    // Should not ever set state during rendering, so do this in useEffect instead.
    // firestore.get(`users/${firebase.auth().currentUser.uid}`).then(all=>{

    seturls(artisan.shop_images);
    // console.log(all.data().shop_images)
    // })
  }, [artisan]);

  console.log(imgURLs);
  const [loading, setLoading] = useState(false);

  uploadedFiles = useSelector(({ firebase: { data } }) => data[`${storagePath}/${firebase.auth().currentUser.uid}`]);
  //   console.log(uploadedFiles);
  const onFilesDrop = (files) => {
    setLoading(true);
    return firebase.uploadFiles(`${firebase.auth().currentUser.uid}/${storagePath}`, files).then((data) => {
      // console.log("File uploaded successfully");

      data.forEach(async (element) => {
        let images = [];
        element.uploadTaskSnaphot.ref.getDownloadURL().then((downloadURL) => {
          // console.log('File available at', downloadURL);
          firestore
          .update({ collection: "users", doc: firebase.auth().currentUser.uid }, { shop_images: [downloadURL] })
          .then((d) => {});
          // images.push(downloadURL)
          //  seturls([])
          //const addimage = (downloadURL) => seturls(state => [...state, downloadURL])
        });
        // console.log(urls)
        // images.push(await urls);
        

        // alert(images);
      });

      setLoading(false);
    });
  };
  function onFileDelete(file, key) {
    return firebase.deleteFile(file.fullPath, `${filesPath}/${key}`);
  }

  return (
    <div>
      <Dropzone onDrop={onFilesDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <p>Drag 'n' drop some files here, or click to select files</p>
            {loading ? <p>Uploading your images</p> : null}
          </div>
        )}
      </Dropzone>
      {uploadedFiles && (
        <div>
          <h3>Uploaded file(s):</h3>
          {map(uploadedFiles, (file, key) => (
            <div key={file.name + key}>
              <span>{file.name}</span>
              <button onClick={() => onFileDelete(file, key)}>Delete File</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
