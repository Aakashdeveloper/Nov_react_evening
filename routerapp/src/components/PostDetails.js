import React from 'react';

const Details = (props) => {
    console.log(props.match.params.name)
    return(
        <div>
                <div className="panel panel-info">
                    <div className="panel-heading">
                    Post details Page
                    </div>
                    <div className="panel-body">
                        <div className="jumbotron">
                            <h2>Details of {props.match.params.name}</h2>
                            <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Details;