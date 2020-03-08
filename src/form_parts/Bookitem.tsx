import React from 'react';

interface Props {
    id: number,
    title: string
}

class Bookitem extends React.Component<Props,{}>{
    render(){
    return <li className="Bookitem">ID:{this.props.id}/タイトル:{ this.props.title }</li>
    }
}

export default Bookitem;
