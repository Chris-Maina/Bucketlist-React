import React, { Component } from 'react';
import './bucket.css';

class Bucketlist extends Component{
    render(){
        return(

                <div className="row">
                    <div className="col-md-6">
                        <div className="panel panel-success">
                            <BucketlistHeading />
                            <BucketlistPanelBody />
                            <Table />
                        </div>
                    </div>
                </div>
            
        );
    }
}

class BucketlistHeading extends Component{
    render(){
        return(
            <div className="panel-heading">
                <h3 className="panel-title">Buckets</h3>
                <div className="pull-right">
                    <span className="clickable filter" data-toggle="tooltip" title="Bucket Filter" data-container="body">
                        <i className="glyphicon glyphicon-filter"></i>
                    </span>
                </div>
            </div>
        );
    }
}
class BucketlistPanelBody extends Component{
    render(){
        return(
            <div className="panel-body">
                <input type="text" className="form-control" data-action="filter" data-filters="#bucket-table" placeholder="Search Bucket"/>
            </div>
        );
    }
}
class Table extends Component{
    render(){
        return(
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
                        <td><button type="submit" className="btn btn-info btn-sm">
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
export default Bucketlist;