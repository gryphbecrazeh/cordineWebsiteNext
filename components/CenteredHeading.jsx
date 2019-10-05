// -----------------------------------------React-----------------------------------------
import React from "react"

const CenteredHeading=( { picture, height="100vh", children } ) => {
    return (
        <div id="container" className="centeredHeading">
            <div className="content">            { children }
            </div>
            <div className="background"></div>
            <style jsx>{ `
                #container{
                    width:100%;
                    height:${height};
                    display:flex;
                    justify-content:center;
                    align-items:center;
                }
                .content{
                    font-size:2em;
                    color:black;
                    font-weight:bold;
                    background-color:white;
                    border-radius:5px;
                    padding:.5em;
                    box-shadow:0 0 10px black;

                }
                .background{
                    position:absolute;
                    z-index:-1;
                    top:0;
                    right:0;
                    left:0;
                    bottom:0;
                    background-image:url(${picture});
                    background-repeat:no-repeat;
                    background-attachment: fixed;
                    background-position: center center;
                    background-size:fill;
                }

`}</style>
        </div>
    )
}
export default CenteredHeading;