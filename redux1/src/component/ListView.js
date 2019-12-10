import React from 'react';

const ListView = (props) => {
    const renderView = ({list}) => {
        if(list){
            return list.map((data) => {
                return(
                    <div>{data.name}</div>
                )
            })
        }
    }

    return(
        <div>
            {renderView(props)}
        </div>
    )
}

export default ListView