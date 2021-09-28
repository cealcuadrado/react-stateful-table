import React from 'react';

class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [
                { id: 1, name: 'Foo', age: 20 },
                { id: 2, name: 'Bar', age: 30 },
                { id: 3, name: 'Baz', age: 40}
            ]
        };
    }

    render() {
        return (
          <div className="container">
            <Header />
            <hr/>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                    {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
                </tbody>
              </table>
            </div>
          </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Stateful table</h1>
            </header>
        )
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.age}</td>
            </tr>
        )
    }
}

export default Layout;