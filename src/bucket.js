import React, { Component } from 'react';
import './bucket.css';

class Bucketlist extends Component {
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
                        <BucketlistHeading
                            title="Buckets" />
                        <BucketlistPanelBody />
                        <Table />
                    </div>
                </div>
            </div>
        );
    }
}

class BucketlistHeading extends Component {
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
                    <span className="glyphicon glyphicon-plus"style={style2} data-toggle="tooltip" title="Create Bucket"></span>
                    
                    <span className="clickable filter" style={style2} data-toggle="tooltip" title="Bucket Filter" data-container="body">
                        <i className="glyphicon glyphicon-filter"></i>
                    </span>
                </div>
            </div>
        );
    }
}
class BucketlistPanelBody extends Component {
    render() {
        let style4 = {'display': 'none'};
        return (
            <div className="panel-body" style={style4}>
                <input type="text" className="form-control" data-action="filter" data-filters="#bucket-table" placeholder="Search Bucket" />
            </div>
        );
    }
}
class Table extends Component {
    render() {
        return (
            <table className="table table-hover" id="bucket-table">
                <thead>
                    <tr>
                        <th>Bucket name</th>
                        <th>Edit</th>
                        <th>Trash</th>
                        <th>Add Activity</th>
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
                        <td>
                            <a href="/activities">
                                <button className="btn btn-info btn-sm">
                                    <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                                </button>
                            </a>
                        </td>
                    </tr>
                </tbody>

            </table>
        );
    }
}
export default Bucketlist;