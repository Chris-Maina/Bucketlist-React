import React, { Component } from 'react';
import './bucket.css';
import fetch from 'isomorphic-fetch';

class Bucketlist extends Component {
    constructor(props) {
        super(props);
        this.state = { openCreate: false,
                    buckets: undefined };
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        this.sendRequest();
    }
    handleClick() {
        this.setState({ openCreate: true });
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.openCreate !== true) {
            this.setState({ openCreate: true });
        }
    }
    sendRequest() {
        let access = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1MDM0ODY3MTMsInN1YiI6MiwiZXhwIjoxNTAzNDg3MzEzfQ._DZq2XBKeyGOURJC31BAZOmtxQ3GBZHAZ_CX_AemZD8';
        fetch('http://127.0.0.1:5000/bucketlist/',{
            method:'GET',
            mode: 'no-cors',
            headers:{
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
                'Access-Control-Allow-Orgin': 'http://localhost:3000',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': access
            }
        })
        .then(function (response) {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            console.log(response.json());
            return response.json();
        }).then(function (data) {
            console.log(data);
        }).catch(function (error) {
            console.log(error);
        });
    }
    render() {
        let style1 = {
            'display': 'flex',
            'justifyContent': 'center',
            'alignItems': 'center',
            'marginTop': '40px',
            'padding': '100px 0'
        };
        return (
            <div className="row" style={style1}>
                <div className="col-md-6">
                    <div className="panel panel-success">
                        <BucketlistHeading
                            title="Buckets"
                            handlePlus={this.handleClick} />
                        <BucketlistPanelBody
                            openCreate={this.state.openCreate} />
                        <Table />
                    </div>
                </div>
            </div>
        );
    }
}

class BucketlistHeading extends Component {
    constructor(props) {
        super(props);
        this.handlePlusClick = this.handlePlusClick.bind(this);
    }
    handlePlusClick() {
        this.props.handlePlus();
    }
    render() {
        let style2 = {
            'cursor': 'pointer',
            'marginLeft': '5px',
            'marginRight': '5px'
        };
        let style3 = {
            'marginTop': '-18px',
            'fontSize': '15px'
        };
        return (
            <div className="panel-heading">
                <h3 className="panel-title">{this.props.title}</h3>
                <div className="pull-right" style={style3}>
                    <span className="glyphicon glyphicon-plus" style={style2} data-toggle="tooltip modal" title="Create Bucket"
                        onClick={this.handlePlusClick}></span>

                    <span className="clickable filter" style={style2} data-toggle="tooltip" title="Bucket Filter" data-container="body" >
                        <i className="glyphicon glyphicon-filter"></i>
                    </span>
                </div>
            </div>
        );
    }
}
class BucketlistPanelBody extends Component {
    render() {
        if (this.props.openCreate) {
            return (
                <div className="panel-body bucket-container">
                    <form>
                        <input type="text" name="bucketname" placeholder="Bucket name" />
                        <input type="submit" name="bucketsubmit" className="btn btn-primary btn-sm bucket-submit" value="Create" />
                    </form>
                </div>
            );
        } else {
            return (
                <div className="panel-body">
                    <input type="text" className="form-control" data-action="filter" data-filters="#bucket-table" placeholder="Search Bucket" />
                </div>
            );
        }
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