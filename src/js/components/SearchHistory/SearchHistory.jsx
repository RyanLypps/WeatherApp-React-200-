import React from "react";

export default class SearchHistory extends React.Component {
 
    render() {
        
        const { history } = this.props;
        return (
            <div className="container">
                <div className="card">
                    <div className="card-header">
                        <h4>Search History</h4>
                        </div>
                    <div className="card-body">
                        <table>
                            <tbody>
                                {history.map((property, index) =>
                                    <tr key={index}>
                                        <td> {property.city} </td>
                                            <td style={{ width: "auto", paddingLeft: "1em", paddingRight: "1em"}}>{new Date().toDateString()}</td>
                                            <td style={{ width: "auto"}}>{new Date().toLocaleTimeString()}</td>
                                            <td><hr></hr></td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
