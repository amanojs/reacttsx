import React from 'react';

interface Props{
    addBooklist: (inputTitle:string)=>void
}

interface State{
    inputTitle: string | ''
}

class Bookinput extends React.Component<Props,State>{
    constructor(props : Props){
        super(props);
        this.state = {
            inputTitle : ''
        }

        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleClickBtn = this.handleClickBtn.bind(this);
    }

    handleChangeInput(e:any){
        this.setState({
            inputTitle: e.target.value
        });
    }

    handleClickBtn(){
        const inputTitle : string = this.state.inputTitle;
        this.props.addBooklist(inputTitle);
        this.setState({
            inputTitle: ''
        })
    }

    render(){
        return(
            <div className="Bookinput">
                <div>教本のタイトル:{ this.state.inputTitle }</div>
                    <input type="text" value={this.state.inputTitle} onChange={this.handleChangeInput} />
                    <button onClick={this.handleClickBtn}>登録</button>
            </div>
        )
    }
}

export default Bookinput