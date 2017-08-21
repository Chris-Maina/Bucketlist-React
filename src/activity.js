import React, { Component } from 'react';
import './bucket.css';

class Activitylist extends Component {
    render() {
        let style1 = {
                    'display': 'flex',
                    'justify-content': 'center',
                    'align-items': 'center',
                    'margin-top': '40px',
                    'padding': '100px 0'};
        return (
            <div className="row" style={style1}>
                <div className="col-md-6">
                    <div className="panel panel-success">
                        <ActivitylistHeading
                            title="Activities" />
                        <ActivitylistPanelBody />
                        <ActivityTable />
                    </div>
                </div>
            </div>
        );
    }
}
class ActivitylistHeading extends Component {
    render() {
        let style2 ={'cursor': 'pointer',
                    'margin-left':'5px',
                'margin-right':'5px'};
        let style3 = {'margin-top': '-18px',
	                'font-size': '15px'};
        return (
            <div className="panel-heading">
                <h3 className="panel-title">{this.props.title}</h3>
                <div className="pull-right" style={style3}>
                    <span className="glyphicon glyphicon-plus"style={style2} data-toggle="tooltip" title="Create Activity"></span>
                    <span className="clickable filter" style={style2} data-toggle="tooltip" title="Activity Filter" data-container="body">
                        <i className="glyphicon glyphicon-filter"></i>
                    </span>
                </div>
            </div>
        );
    }
}
class ActivitylistPanelBody extends Component {
    render() {
        let style4 = {'display': 'none'};
        return (
            <div className="panel-body" style={style4}>
                <input type="text" className="form-control" data-action="filter" data-filters="#bucket-table" placeholder="Search Bucket" />
            </div>
        );
    }
}
class ActivityTable extends Component {
    render() {
        return (
            <table className="table table-hover" id="bucket-table">
                <thead>
                    <tr>
                        <th>Bucket name</th>
                        <th>Edit</th>
                        <th>Trash</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Adventure</td>
                        <td>
                            <button type="submit" className="btn btn-info btn-sm">
                                <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                            </button>
                        </td>
                        <td>
                            <button type="submit" className="btn btn-info btn-sm">
                                <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                            </button>
                        </td>
                    </tr>
                </tbody>

            </table>
        );
    }
}

export default Activitylist;