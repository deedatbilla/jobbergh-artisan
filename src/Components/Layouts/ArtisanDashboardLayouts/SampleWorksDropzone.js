import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { map } from "lodash";
import { useSelector } from "react-redux";
import { useFirebase, useFirebaseConnect } from "react-redux-firebase";
import Dropzone from "react-dropzone";
const fileMetadata = { contentType: "image/jpeg" };
// Path within Database for metadata (also used for file Storage path)
const filesPath = "uploadedFiles";
const storagePath = "sample_works";
const dbPath = "artisan";
export default function SampleWorksDropzone({ uploadedFiles, onFileDelete, firebase, firestore, artisan }) {
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
    return firebase
      .uploadFiles(
        `artisans/${firebase.auth().currentUser.uid}/${storagePath}`,
        files,
        `artisan/${firebase.auth().currentUser.uid}/sample_works`
      )
      .then((data) => {
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
