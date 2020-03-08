import React from 'react';
import './App.css';
import Bookitem from './form_parts/Bookitem';
import Bookinput from './form_parts/Bookinput';

interface State{
  items : {id: number,title: string}[],
  autoid : number
}
type Item = {
  id : number,
  title : string
}

class App extends React.Component<{},State> {
    constructor(props : any){
      super(props);
      this.state = {
        items: [{id: 1, title: 'Vue教本'},{id: 2,title: 'React教本'}],
        autoid: 3,
      }
      this.addBooklist = this.addBooklist.bind(this);
    }

    addBooklist(inputTitle : string){
      const {items,autoid} = this.state;
      console.log('aaa')
      const pushItem : Item = {
        id: autoid,
        title: inputTitle
      }
      items.push(pushItem);
      this.setState({
        items: items,
        autoid: autoid + 1,
      })
    }

    render() {
        return(
          <div className="App">
            <Bookinput addBooklist={this.addBooklist} />
            <ul>
              { this.state.items.map((item:Item)=>(<Bookitem {...item} key={item.id} />)) }
            </ul>

          </div>
        )
    }
}

export default App;
