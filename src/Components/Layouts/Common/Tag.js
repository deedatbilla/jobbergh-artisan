import React from "react";

const deleteSkill = (props) => {
  //   const { index, firestore, firebase, skills, artisan } = props;
  //   skills.splice(index, 1);
  //   firestore.update({ collection: "artisan", doc: firebase.auth().currentUser.uid }, { ...artisan, services: skills });
  console.log(props);
};
const Tag = (props) => {
  return (
    <div style={{ borderRadius: "10px", backgroundColor: "#fafafa" }} className=" m-2">
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="text-center">{props.item}</p>
          </div>
          <div className="col float-right">
            {/* <a href="#!"> */}
            <i
              className="fa fa-times-circle"
              onClick={() => {
                const { index, firestore, firebase, artisan } = props;
                let skills = [...artisan.services];
                // console.log(JSON.stringify(skills));
                skills.splice(index, 1);
                firestore
                  .update({ collection: "artisan", doc: firebase.auth().currentUser.uid }, { ...artisan, services: skills })
                  .then(console.log("deleted"));
              }}
            ></i>

            {/* </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tag;
