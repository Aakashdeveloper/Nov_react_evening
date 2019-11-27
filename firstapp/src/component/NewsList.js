import React from 'react';

const NewsList = (props) => {
    console.log("props is>>>", props)
    const rendeList = props.newsdata.map((item,index) => {
        return(
            <div key={index}>
                <h3>{item.title}</h3>
                <p>{item.feed}</p>
            </div>
        )
    })

    return(
        <div>
          {rendeList}
        </div>
    )
}

export default NewsList;